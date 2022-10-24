## Preface

The scheme as a set of multi-function background frame templates, suitable for most of the WEB management system development. Convenient development fast simple good components based on Vue3 and ElementPlus. Color separation of color style, support manual switch themes, and it is convenient to use a custom theme color.

## Function

- [x] Element-UI
- [x] Login/Logout
- [x] Dashboard
- [x] Table
- [x] Tabs
- [x] From
- [x] Chart :bar_chart:
- [x] Editor
- [x] Markdown
- [x] Upload pictures by clipping or dragging
- [x] Permission
- [x] Three level menu
- [x] Custom icon

## Installation steps

    cd vue-manage-system											// Enter template directory
    npm install													// Installation dependency

## Local development

    npm run dev

## Constructing production

    // Constructing project
    npm run build

## Component description and presentation

### vue-schart

Vue.js wrapper for sChart.js. Github : [vue-schart](https://github.com/lin-xin/vue-schart#/)

```html
<template>
  <div>
    <schart class="wrapper" canvasId="myCanvas" :options="options"></schart>
  </div>
</template>
<script setup>
  import { ref } from "vue"
  import Schart from "vue-schart" // 导入Schart组件
  const options = ref({
    type: "bar",
    title: {
      text: "最近一周各品类销售图",
    },
    labels: ["周一", "周二", "周三", "周四", "周五"],
    datasets: [
      {
        label: "家电",
        data: [234, 278, 270, 190, 230],
      },
      {
        label: "百货",
        data: [164, 178, 190, 135, 160],
      },
      {
        label: "食品",
        data: [144, 198, 150, 235, 120],
      },
    ],
  })
</script>
<style>
  .wrapper {
    width: 7rem;
    height: 5rem;
  }
</style>
```

## Screenshot

### Default theme

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms1.png)

### Login

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms3.png)

## License

[MIT](https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE)
