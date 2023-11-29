/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/colorthief@2.0.2/src/color-thief.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var CanvasImage=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};CanvasImage.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},CanvasImage.prototype.update=function(t){this.context.putImageData(t,0,0)},CanvasImage.prototype.getPixelCount=function(){return this.width*this.height},CanvasImage.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},CanvasImage.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var ColorThief=function(){};if(ColorThief.prototype.getColor=function(t,r){return this.getPalette(t,5,r)[0]},ColorThief.prototype.getPalette=function(t,r,n){(void 0===r||r<2||r>256)&&(r=10),(void 0===n||n<1)&&(n=10);for(var e,o,i,a,s=new CanvasImage(t),u=s.getImageData().data,h=s.getPixelCount(),c=[],f=0;f<h;f+=n)o=u[(e=4*f)+0],i=u[e+1],a=u[e+2],u[e+3]>=125&&(o>250&&i>250&&a>250||c.push([o,i,a]));var v=MMCQ.quantize(c,r),p=v?v.palette():null;return s.removeCanvas(),p},ColorThief.prototype.getColorFromUrl=function(t,r,n){sourceImage=document.createElement("img");var e=this;sourceImage.addEventListener("load",function(){var o=e.getPalette(sourceImage,5,n)[0];r(o,t)}),sourceImage.src=t},ColorThief.prototype.getImageData=function(t,r){xhr=new XMLHttpRequest,xhr.open("GET",t,!0),xhr.responseType="arraybuffer",xhr.onload=function(t){if(200==this.status){uInt8Array=new Uint8Array(this.response),n=uInt8Array.length,binaryString=new Array(n);for(var n=0;n<uInt8Array.length;n++)binaryString[n]=String.fromCharCode(uInt8Array[n]);data=binaryString.join(""),base64=window.btoa(data),r("data:image/png;base64,"+base64)}},xhr.send()},ColorThief.prototype.getColorAsync=function(t,r,n){var e=this;this.getImageData(t,function(t){sourceImage=document.createElement("img"),sourceImage.addEventListener("load",function(){var t=e.getPalette(sourceImage,5,n)[0];r(t,this)}),sourceImage.src=t})},!pv)var pv={map:function(t,r){var n={};return r?t.map(function(t,e){return n.index=e,r.call(n,t)}):t.slice()},naturalOrder:function(t,r){return t<r?-1:t>r?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,e,o){return n.index=o,t+r.call(n,e)}:function(t,r){return t+r},0)},max:function(t,r){return Math.max.apply(null,r?pv.map(t,r):t)}};var MMCQ=function(){var t=5,r=8-t,n=1e3,e=.75;function o(r,n,e){return(r<<2*t)+(n<<t)+e}function i(t){var r=[],n=!1;function e(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||e(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||e(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||e(),r}}}function a(t,r,n,e,o,i,a){this.r1=t,this.r2=r,this.g1=n,this.g2=e,this.b1=o,this.b2=i,this.histo=a}function s(){this.vboxes=new i(function(t,r){return pv.naturalOrder(t.vbox.count()*t.vbox.volume(),r.vbox.count()*r.vbox.volume())})}function u(t,r){if(r.count()){var n=r.r2-r.r1+1,e=r.g2-r.g1+1,i=r.b2-r.b1+1,a=pv.max([n,e,i]);if(1==r.count())return[r.copy()];var s,u,h,c,f=0,v=[],p=[];if(a==n)for(s=r.r1;s<=r.r2;s++){for(c=0,u=r.g1;u<=r.g2;u++)for(h=r.b1;h<=r.b2;h++)c+=t[o(s,u,h)]||0;f+=c,v[s]=f}else if(a==e)for(s=r.g1;s<=r.g2;s++){for(c=0,u=r.r1;u<=r.r2;u++)for(h=r.b1;h<=r.b2;h++)c+=t[o(u,s,h)]||0;f+=c,v[s]=f}else for(s=r.b1;s<=r.b2;s++){for(c=0,u=r.r1;u<=r.r2;u++)for(h=r.g1;h<=r.g2;h++)c+=t[o(u,h,s)]||0;f+=c,v[s]=f}return v.forEach(function(t,r){p[r]=f-t}),g(a==n?"r":a==e?"g":"b")}function g(t){var n,e,o,i,a,u=t+"1",h=t+"2",c=0;for(s=r[u];s<=r[h];s++)if(v[s]>f/2){for(o=r.copy(),i=r.copy(),a=(n=s-r[u])<=(e=r[h]-s)?Math.min(r[h]-1,~~(s+e/2)):Math.max(r[u],~~(s-1-n/2));!v[a];)a++;for(c=p[a];!c&&v[a-1];)c=p[--a];return o[h]=a,i[u]=o[h]+1,[o,i]}}}return a.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(t){var r=this.histo;if(!this._count_set||t){var n,e,i,a=0;for(n=this.r1;n<=this.r2;n++)for(e=this.g1;e<=this.g2;e++)for(i=this.b1;i<=this.b2;i++)a+=r[o(n,e,i)]||0;this._count=a,this._count_set=!0}return this._count},copy:function(){return new a(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(r){var n=this.histo;if(!this._avg||r){var e,i,a,s,u=0,h=1<<8-t,c=0,f=0,v=0;for(i=this.r1;i<=this.r2;i++)for(a=this.g1;a<=this.g2;a++)for(s=this.b1;s<=this.b2;s++)u+=e=n[o(i,a,s)]||0,c+=e*(i+.5)*h,f+=e*(a+.5)*h,v+=e*(s+.5)*h;this._avg=u?[~~(c/u),~~(f/u),~~(v/u)]:[~~(h*(this.r1+this.r2+1)/2),~~(h*(this.g1+this.g2+1)/2),~~(h*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var n=t[0]>>r;return gval=t[1]>>r,bval=t[2]>>r,n>=this.r1&&n<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},s.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,e,o=this.vboxes,i=0;i<o.size();i++)((n=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<r||void 0===r)&&(r=n,e=o.peek(i).color);return e},forcebw:function(){var t=this.vboxes;t.sort(function(t,r){return pv.naturalOrder(pv.sum(t.color),pv.sum(r.color))});var r=t[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,e=t[n].color;e[0]>251&&e[1]>251&&e[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(h,c){if(!h.length||c<2||c>256)return!1;var f=function(n){var e,i,a,s,u=new Array(1<<3*t);return n.forEach(function(t){i=t[0]>>r,a=t[1]>>r,s=t[2]>>r,e=o(i,a,s),u[e]=(u[e]||0)+1}),u}(h);f.forEach(function(){});var v=function(t,n){var e,o,i,s=1e6,u=0,h=1e6,c=0,f=1e6,v=0;return t.forEach(function(t){e=t[0]>>r,o=t[1]>>r,i=t[2]>>r,e<s?s=e:e>u&&(u=e),o<h?h=o:o>c&&(c=o),i<f?f=i:i>v&&(v=i)}),new a(s,u,h,c,f,v,n)}(h,f),p=new i(function(t,r){return pv.naturalOrder(t.count(),r.count())});function g(t,r){for(var e,o=1,i=0;i<n;)if((e=t.pop()).count()){var a=u(f,e),s=a[0],h=a[1];if(!s)return;if(t.push(s),h&&(t.push(h),o++),o>=r)return;if(i++>n)return}else t.push(e),i++}p.push(v),g(p,e*c);for(var l=new i(function(t,r){return pv.naturalOrder(t.count()*t.volume(),r.count()*r.volume())});p.size();)l.push(p.pop());g(l,c-l.size());for(var m=new s;l.size();)m.push(l.pop());return m}}}();
//# sourceMappingURL=/sm/2bce65ab8c63b67b04c4fa0c1f98a751c23dfcd6a670cc272d909a5dcd4fc1aa.map
