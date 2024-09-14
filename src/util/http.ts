import axios from 'axios'
import { useGetToken } from './func'

export const service = axios.create({
    baseURL: '', // 基础请求地址
    timeout: 10000, // 请求超时设置
    withCredentials: false // 跨域请求是否需要携带 cookie
})

service.interceptors.request.use(
    (config) => {
        console.log(config, '请求');
        const token = useGetToken()
        if (token && !config.url?.includes('/auth/login')) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code !== 200) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)
