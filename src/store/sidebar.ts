import { defineStore } from "pinia"

export const useSidebarStore = defineStore("sidebar", {
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
