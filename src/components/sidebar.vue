<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sidebar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu
            :index="item.index"
            :key="item.index"
            v-permiss="item.name"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <!--  <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.permiss"
                :key="subItem.permiss"
                v-permiss="item.name"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.permiss"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu> -->
              <el-menu-item :index="subItem.index" v-permiss="item.name">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item
            :index="item.index"
            :key="item.index"
            v-permiss="item.name"
          >
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useSidebarStore } from "../store/sidebar"
import { useRoute } from "vue-router"

interface SidebarStore {
  icon?: string
  title: string
  index: string
  permiss: string
  name: string
  subs?: SidebarStore[]
}
const items = [
  {
    icon: "Odometer",
    index: "/home",
    title: "????????????",
    permiss: "1",
    name: "home",
  },

  {
    icon: "Bell",
    index: "/attendance",
    title: "????????????",
    permiss: "2",
    name: "attendance",
    subs: [
      {
        index: "/attendance/signIn",
        title: "??????",
        permiss: "3",
        name: "signIn",
      },
      {
        index: "/attendance/summary",
        title: "??????",
        permiss: "4",
        name: "summary",
      },
      {
        index: "/attendance/leave",
        title: "??????",
        permiss: "5",
        name: "leave",
      },
      {
        index: "/attendance/onBT",
        title: "??????",
        permiss: "6",
        name: "onBT",
      },
      {
        index: "/attendance/supplementary",
        title: "??????",
        permiss: "7",
        name: "supplementary",
      },
    ],
  },
  {
    icon: "Stamp",
    index: "/staff/staffList",
    title: "????????????",
    permiss: "8",
    name: "staff",
    subs: [
      {
        index: "/staff/staffList",
        title: "????????????",
        permiss: "9",
        name: "staffList",
      },
      {
        index: "/staff/addStaff",
        title: "????????????",
        permiss: "10",
        name: "addStaff",
      },
    ],
  },
  {
    icon: "Setting",
    index: "/configs",
    title: "????????????",
    permiss: "11",
    name: "configs",
    subs: [
      {
        index: "/configs/branchCfg",
        title: "???????????????",
        permiss: "12",
        name: "branchCfg",
      },
      {
        index: "/configs/departmentCfg",
        title: "????????????",
        permiss: "13",
        name: "departmentCfg",
      },
      {
        index: "/configs/workCfg",
        title: "????????????",
        permiss: "14",
        name: "workCfg",
      },
      {
        index: "/configs/taskCfg",
        title: "????????????",
        permiss: "15",
        name: "taskCfg",
      },
    ],
  },
  {
    icon: "MessageBox",
    index: "/finance",
    title: "????????????",
    permiss: "16",
    name: "finance",
    subs: [
      {
        index: "/finance/wagesList",
        title: "??????",
        permiss: "17",
        name: "wagesList",
      },
      {
        index: "/finance/reimbursement",
        title: "??????",
        permiss: "18",
        name: "reimbursement",
      },
    ],
  },
  {
    icon: "Files",
    index: "/files",
    title: "????????????",
    permiss: "19",
    name: "files",
    subs: [
      {
        index: "/files/filesList",
        title: "????????????",
        permiss: "20",
        name: "filesList",
      },
    ],
  },
  {
    icon: "User",
    index: "/members",
    title: "???????????????",
    permiss: "21",
    name: "members",
    subs: [
      {
        index: "/members/changeRecommend",
        title: "???????????????",
        permiss: "22",
        name: "changeRecommend",
      },
    ],
  },
  {
    icon: "Switch",
    index: "/additionals",
    title: "????????????",
    permiss: "23",
    name: "additionals",
    subs: [
      {
        index: "/additionals/additionalYsg",
        title: "?????????",
        permiss: "24",
        name: "additionalYsg",
      },
      {
        index: "/additionals/additionalJf",
        title: "??????",
        permiss: "25",
        name: "additionalJf",
      },
    ],
  },
  {
    icon: "Stopwatch",
    index: "/records",
    title: "????????????",
    permiss: "26",
    name: "records",
    subs: [
      {
        index: "/records/ysgRecords",
        title: "???????????????",
        permiss: "27",
        name: "ysgRecords",
      },
      {
        index: "/records/zzjhRecords",
        title: "????????????",
        permiss: "28",
        name: "zzjhRecords",
      },
    ],
  },
  {
    icon: "Soccer",
    index: "/activitys",
    title: "????????????",
    permiss: "29",
    name: "activitys",
    subs: [
      {
        index: "/activitys/shareTopTen",
        title: "???????????????",
        permiss: "30",
        name: "shareTopTen",
      },
      {
        index: "/activitys/yslMonthTopTen",
        title: "??????????????????",
        permiss: "31",
        name: "yslMonthTopTen",
      },
      {
        index: "/activitys/yslDayTopTen",
        title: "??????????????????",
        permiss: "32",
        name: "yslDayTopTen",
      },
    ],
  },
  {
    icon: "CameraFilled",
    index: "/news",
    title: "????????????",
    permiss: "33",
    name: "news",
    subs: [
      {
        index: "/news/addNews",
        title: "????????????",
        permiss: "34",
        name: "addNews",
      },
      {
        index: "/news/newsList",
        title: "????????????",
        permiss: "35",
        name: "newsList",
      },
      {
        index: "/news/updateNews",
        title: "????????????",
        permiss: "36",
        name: "updateNews",
      },
    ],
  },
  {
    icon: "StarFilled",
    index: "/integrals",
    title: "????????????",
    permiss: "37",
    name: "integrals",
    subs: [
      {
        index: "/integrals/addIntegralP",
        title: "????????????",
        permiss: "38",
        name: "addIntegralP",
      },
      {
        index: "/integrals/integrals",
        title: "????????????",
        permiss: "39",
        name: "IntegralPList",
      },
    ],
  },
  {
    icon: "EditPen",
    index: "/artworks",
    title: "????????????",
    permiss: "40",
    name: "artworks",
    subs: [
      {
        index: "/artworks/addArtwork",
        title: "????????????",
        permiss: "41",
        name: "addArtwork",
      },
      {
        index: "/artworks/artworks",
        title: "????????????",
        permiss: "42",
        name: "artworkList",
      },
    ],
  },
  {
    icon: "ChatDotRound",
    index: "/orders",
    title: "????????????",
    permiss: "44",
    name: "orders",
    subs: [
      {
        index: "/orders/integralOrders",
        title: "????????????",
        permiss: "44",
        name: "integralOrders",
      },
      {
        index: "/orders/artOrders",
        title: "???????????????",
        permiss: "45",
        name: "artOrders",
      },
    ],
  },

  {
    icon: "User",
    index: "/cemetery",
    title: "????????????",
    permiss: "46",
    name: "cemetery",
    subs: [
      {
        index: "/cemetery/cemeteryAdd",
        title: "????????????",
        permiss: "47",
        name: "cemeteryAdd",
      },
      {
        index: "/cemetery/cemeteryList",
        title: "????????????",
        permiss: "48",
        name: "cemeteryList",
      },
    ],
  },
  {
    icon: "CloseBold",
    index: "/debts",
    title: "????????????",
    permiss: "49",
    name: "debts",
    subs: [
      {
        index: "/debts/zhujie",
        title: "????????????",
        permiss: "50",
        name: "zhujie",
      },
      {
        index: "/debts/zhujieDetails",
        title: "????????????",
        permiss: "51",
        name: "zhujieDetails",
      },
    ],
  },
  {
    icon: "Headset",
    index: "/kangyang",
    title: "????????????",
    permiss: "52",
    name: "kangyang",
    subs: [
      {
        index: "/kangyang/addKyMoney",
        title: "????????????",
        permiss: "53",
        name: "addKyMoney",
      },
      {
        index: "/kangyang/addKyMoneyRecord",
        name: "addKyMoneyRecord",
        title: "????????????",
        permiss: "54",
      },
      {
        index: "/kangyang/kyUsers",
        name: "kyUsers",
        title: "????????????",
        permiss: "55",
      },
    ],
  },
  {
    icon: "Flag",
    index: "/shops",
    title: "????????????",
    permiss: "56",
    name: "shops",
    subs: [
      {
        index: "/shops/shopsList",
        title: "????????????",
        permiss: "57",
        name: "shopsList",
      },
    ],
  },
  {
    icon: "UserFilled",
    index: "/admin",
    title: "???????????????",
    permiss: "58",
    name: "admin",
    subs: [
      {
        index: "/admin/adminList",
        title: "???????????????",
        permiss: "59",
        name: "adminList",
      },
      {
        index: "/admin/adminAdd",
        title: "???????????????",
        permiss: "60",
        name: "adminAdd",
      },
    ],
  },
]

const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})

const sidebar = useSidebarStore()
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
