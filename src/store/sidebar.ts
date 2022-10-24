import { defineStore } from "pinia"
import { Pinia } from "../enum/store"
export const useSidebarStore = defineStore(Pinia.sidebar, {
  state: () => {
    return {
      collapse: false,
      Theme: "",
    }
  },
  getters: {},
  actions: {
    handleCollapse() {
      this.collapse = !this.collapse
    },
  },
})
