import axios from 'axios'

const http = axios.create({
  timeout: 30000
})

// request 拦截器 
http.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// respone 拦截器
http.interceptors.response.use(
  response => {
    const res = response.data
    if (res.error) {
      if (res.error.code === '') { // 接口自定义错误代码
        // 移除登陆token 显示接口错误消息 
      }
      // process.env.NODE_ENV !== 'production' && console.error(res)
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  error => {
    let errorAssign = (obj) => (Object.assign({}, error, {
      error: obj
    }))
    let obj = {}

    if (error.code === 'ECONNABORTED' || error.response.status == 504 || error.response.status == 404) {
      obj = errorAssign({ code: 'timeout', message: '请求超时' })
    } else if (error.response.status == 403) {
      obj = errorAssign({ code: 'crossError', message: '权限不足' })
    }else {
      obj = errorAssign({ code: error.response.status, message: '请求出错' })
    }
    // process.env.NODE_ENV !== 'production' && console.error(obj)
    return Promise.reject(obj)
  }
)

export default http
