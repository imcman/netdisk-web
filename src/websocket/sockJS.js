import SockJS from  'sockjs-client';
import  Stomp from './stomp-index';
import ws from './websocket_config';
import Bus from '@/assets/js/bus'

export function toConnection(username,token) {
  connect(username, token);
  // 断开重连机制,尝试发送消息,捕获异常发生时重连
  ws.timer = setInterval(() => {
    try {
      if(ws.isConnected){
        ws.stompClient.send("test");
      }else{
        connect(username, token);
      }
    } catch (err) {
      connect(username, token);
    }
  }, 5000);
}

function connect(username,token){
  //地址+端点路径，构建websocket链接地址,注意，对应config配置里的addEndpoint
  let socket = new SockJS(ws.url + '/mq');
  // 获取STOMP子协议的客户端对象
  ws.stompClient = Stomp.over(socket);
  // 定义客户端的认证信息,按需求配置
  ws.headers = {
    Authorization:token
  };
  // 向服务器发起websocket连接
  ws.stompClient.connect(ws.headers,() => {
    ws.isConnected = true;
    // 订阅消息
    ws.stompClient.subscribe('/user/queue/update', (msg) => {
      const url = msg.headers.url
      if (url === 'synced') {
        Bus.$emit('msg/synced', msg)
      } else {
        Bus.$emit('msg/file/change', msg)
        if ('operationFile' === url) {
          let doc = JSON.parse(msg.body)
          if (doc.code === 0) {
            Bus.$notify({
              title: `${doc.operation}成功`,
              dangerouslyUseHTMLString: true,
              message: `
<div>
  <p>form:</p>
  <pre style="word-break: break-all;white-space: pre-wrap;font-size: 12px;">${doc.from}</pre>
</div>
<div>
  <p>to:</p>
  <pre style="word-break: break-all;white-space: pre-wrap;font-size: 12px;">${doc.to}</pre>
</div>`,
              type: 'success',
            });
          } else {
            Bus.$emit('msg/file/operation/fault', 'fault')
            Bus.$notify({
              title: `${doc.operation}失败`,
              dangerouslyUseHTMLString: true,
              message: `<span style="font-size: 12px;">${doc.msg}</span>`,
              type: 'error'
            });
          }
        }
      }
    }, ws.headers);
  }, (err) => {
    ws.isConnected = false;
    // 连接发生错误时的处理函数
  });

}

export function disconnect() {
  if (ws.isConnected) {
    ws.stompClient.disconnect();
    ws.isConnected = false
  }
  clearInterval(ws.timer)
}
