import baseFetch from './base/fetch'
const fetch = (url, ...arg) => baseFetch('/file/' + url, ...arg)
export default {
    getFile(data) {
        return fetch('list', data)
    },
    getAdminFileList(data) {
        return fetch('adminList', data)
    },
    getShareFile(data) {
        return fetch('shareList', data)
    },
    createShare(data) {
        return fetch('createShare', data)
    },
    updateFile(data) {
        return fetch('update', data)
    },
    deleteFile(id) {
        return fetch('delete', id)
    },
    getShareDetail(id) {
        return fetch('shareDetail', id)
    },
    restoreFile(id) {
        return fetch('restore', id)
    },
    realDeleteFile(id) {
        return fetch('deleteFile', id)
    },
    getDiskInfo(id) {
        return fetch('getDiskInfo', '', 'get')
    },
}
