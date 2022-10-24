import { createApp, toRaw } from "vue"
import { createPinia, storeToRefs } from "pinia"
import type { PiniaPluginContext, Pinia } from "pinia"
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import App from "./App.vue"
import router from "./router"
import { usePermissStore } from "./store/permiss"
import "element-plus/dist/index.css"
import "./assets/css/icon.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import { useUserInfo } from "./store/user"
const __piniaKey = "__PINIAKEY__"
//定义兜底变量

type Options = {
  key?: string
}
//定义入参类型

//将数据存在本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

//存缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {}
}

//利用函数柯丽华接受用户入参
const piniaPlugin = (options: Options) => {
  //将函数返回给pinia  让pinia  调用 注入 context
  return (context: PiniaPluginContext) => {
    const { store } = context

    const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`)

    store.$subscribe(() => {
      setStorage(
        `${options?.key ?? __piniaKey}-${store.$id}`,
        toRaw(store.$state)
      )
    })

    //返回值覆盖pinia 原始值
    return {
      ...data,
    }
  }
}

const app = createApp(App)
const pinia: Pinia = createPinia().use(
  piniaPlugin({
    key: "pinia",
  })
)

app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 自定义权限指令
const permiss = usePermissStore()
app.directive("permiss", {
  mounted(el, binding) {
    const { userInfo } = storeToRefs(useUserInfo())
    if (
      !permiss.key.includes(String(binding.value)) &&
      userInfo.value.access[0] !== "super_admin"
    ) {
      el["hidden"] = true
    }
  },
})

app.mount("#app")
