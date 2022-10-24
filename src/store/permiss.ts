import { defineStore } from "pinia"
import { Pinia } from "../enum/store"
interface ObjectList {
  [key: string]: string[]
}

export const usePermissStore = defineStore(Pinia.permiss, {
  state: () => {
    return {
      key: <string[]>[],
      defaultList: <ObjectList>{
        admin: [],
        user: [],
      },
    }
  },
  actions: {
    handleSet(val: string[]) {
      this.key = val
    },
  },
})
