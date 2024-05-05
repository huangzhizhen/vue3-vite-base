import Axios from 'axios'
import { getErrorRes } from '@/utils/errorRes'
import {ElMessage} from 'element-plus'

const axios = Axios.create({
  baseURL: '',
  timeout: 10000,//请求超时时间10s
})

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    //这里对config进行处理....
    let jsonUrlList = [
      '/codex/group/save',
      '/codex/user/save',
      '/codex/gvsuser/save',
      '/codex/gvsuser/delete',
      '/codex/project/relationGvsProject',
    ]
    if (jsonUrlList.includes(config.url ?? '')) {
      config.headers['Content-Type'] = 'application/json'
    } else {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    //这里对response进行处理....
    const res = response.data
    if (Number(res.statusCode) !== 200 && res.success === false) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (response.headers['content-type'] === 'application/vnd.ms-excel;charset=UTF-8') {
      return response
    } else {
      return res
    }
  },
  (error) => {
    console.log(error)
    let errMessage = ''
      errMessage = getErrorRes(error.response.status)
      ElMessage.error({
        message: errMessage,
        type: 'error',
        duration: 2 * 1000
      })
    return Promise.reject(error)
  }
)

export default axios
