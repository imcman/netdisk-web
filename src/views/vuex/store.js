// import Vue from 'vue'
// import Vuex from 'vuex'
// import { getStore,setStore,removeStore } from './utils/store'
// import userApi from './api/user'
//
// Vue.use(Vuex)
// const store = new Vuex.Store({
//     state: {
//         userInfo: getStore({ name: 'userInfo' })=={} ? {token:'',name:'',role:''}:getStore({ name: 'userInfo' }),
//         drawer: { open: false, direction: 'ltr' },
//         fromFolderId: null,
//         token:getStore({name:'token'})||''
//     },
//     getters: {
//         token(state){
//             return state.token
//         },
//         userInfo(state) {
//             return state.userInfo
//         },
//         getDrawerInfo(state) {
//             return state.drawer
//         },
//         getFromFolderId(state) {
//             return state.fromFolderId
//         }
//     },
//     mutations: {
//         addUserInfo(state, userInfo) {
//             state.userInfo = userInfo
//             setStore({ name: 'userInfo', content: state.userInfo})
//         },
//         addToken(state,token){
//             state.token = token
//             setStore({name:'token',content:state.token})
//         },
//         quitUserInfo(state) {
//             state.userInfo = {}
//             state.drawer = { open: false, direction: 'ltr' }
//             state.token = ''
//             state.FromFolderId = null
//             removeStore({name: 'userInfo'})
//             removeStore({name: 'drawer'})
//             removeStore({name: 'fromFolderId'})
//             removeStore({name: 'token'})
//         },
//         changeDrawer(state, drawer = [false, 'ltr']) {
//             const [open, direction = 'ltr'] = drawer
//             state.drawer = {
//                 open,
//                 direction
//             }
//             setStore({ name: 'drawer', content: state.drawer})
//         },
//         changeFromFolderId(state, FromFolderId) {
//             state.fromFolderId = FromFolderId
//             setStore({ name: 'fromFolderId', content: state.fromFolderId})
//         }
//     },
//     actions: {
//         login({ commit }, userInfo) {
//             return new Promise((resolve, reject) => {
//                 userApi.login(userInfo).then(response => {
//                     commit('addUserInfo', response)
//                     resolve(response)
//                 }).catch(error => {
//                     reject(error)
//                 })
//             })
//         },
//         getInfo({ commit, state }) {
//             return new Promise((resolve, reject) => {
//                 userApi.getInfo().then(response => {
//                     commit('addUserInfo', response)
//                     resolve(response)
//                 }).catch(error => {
//                     reject(error)
//                 })
//             })
//         },
//
//         awaitChangeAccountMoney(context, money) {
//             setTimeout(() => {
//                 context.commit('changeAccountMoney', money)
//             }, 10)
//         }
//     }
// })
// export default store
