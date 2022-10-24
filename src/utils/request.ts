import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios"
import { ElMessage } from "element-plus"
import { storeToRefs } from "pinia"
import { useUserInfo } from "../store/user"

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  params: {
    verify: "LELLfP2YV2OtwZmOtzVc",
  },
})

const ERROR_STATUS: { [key: number]: string } = {
  400: "400: 请求出现语法错误~",
  401: "401: 用户未授权~",
  403: "403: 服务器拒绝访问~",
  404: "404: 请求的资源不存在~",
  405: "405: 请求方法未允许~",
  408: "408: 网络请求超时~",
  500: "500: 服务器内部错误~",
  501: "501: 服务器未实现请求功能~",
  502: "502: 错误网关~",
  503: "503: 服务不可用~",
  504: "504: 网关超时~",
  505: "505: http版本不支持该请求~",
}
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { token } = storeToRefs(useUserInfo())
    if (config.url !== "/admin/verify") {
      config.params = Object.assign(config.params, {
        token: token.value,
      })
    }
    console.log(config.params)

    return config
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    ElMessage.error(ERROR_STATUS[error?.response?.status as number])

    return Promise.reject()
  }
)

export default service
