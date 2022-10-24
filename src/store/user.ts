import { defineStore } from "pinia"

import _$ from "../utils/request"
export const useUserInfo = defineStore("user", {
  state: () => {
    return {
      token: "",
      userInfo: <
        {
          access: string[]
          avatar: string
          code: number
          name: string
          user_id: string
        }
      >{},
    }
  },
  getters: {},
  actions: {
    login: ({ name, password }: { name: string; password: string }) => {
      _$.post(
        "/admin/verify",
        { name: name.trim(), password: password.trim() },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then((response) => {
        console.log(response)
      })
    },
  },
})
