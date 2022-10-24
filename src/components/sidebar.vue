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
    title: "系统首页",
    permiss: "1",
    name: "home",
  },

  {
    icon: "Bell",
    index: "/attendance",
    title: "考勤管理",
    permiss: "2",
    name: "attendance",
    subs: [
      {
        index: "/attendance/signIn",
        title: "签到",
        permiss: "3",
        name: "signIn",
      },
      {
        index: "/attendance/summary",
        title: "总结",
        permiss: "4",
        name: "summary",
      },
      {
        index: "/attendance/leave",
        title: "请假",
        permiss: "5",
        name: "leave",
      },
      {
        index: "/attendance/onBT",
        title: "出差",
        permiss: "6",
        name: "onBT",
      },
      {
        index: "/attendance/supplementary",
        title: "补签",
        permiss: "7",
        name: "supplementary",
      },
    ],
  },
  {
    icon: "Stamp",
    index: "/staff/staffList",
    title: "员工管理",
    permiss: "8",
    name: "staff",
    subs: [
      {
        index: "/staff/staffList",
        title: "员工列表",
        permiss: "9",
        name: "staffList",
      },
      {
        index: "/staff/addStaff",
        title: "员工添加",
        permiss: "10",
        name: "addStaff",
      },
    ],
  },
  {
    icon: "Setting",
    index: "/configs",
    title: "配置管理",
    permiss: "11",
    name: "configs",
    subs: [
      {
        index: "/configs/branchCfg",
        title: "分公司管理",
        permiss: "12",
        name: "branchCfg",
      },
      {
        index: "/configs/departmentCfg",
        title: "部门配置",
        permiss: "13",
        name: "departmentCfg",
      },
      {
        index: "/configs/workCfg",
        title: "上班配置",
        permiss: "14",
        name: "workCfg",
      },
      {
        index: "/configs/taskCfg",
        title: "绩效配置",
        permiss: "15",
        name: "taskCfg",
      },
    ],
  },
  {
    icon: "MessageBox",
    index: "/finance",
    title: "财务管理",
    permiss: "16",
    name: "finance",
    subs: [
      {
        index: "/finance/wagesList",
        title: "工资",
        permiss: "17",
        name: "wagesList",
      },
      {
        index: "/finance/reimbursement",
        title: "报销",
        permiss: "18",
        name: "reimbursement",
      },
    ],
  },
  {
    icon: "Files",
    index: "/files",
    title: "文件管理",
    permiss: "19",
    name: "files",
    subs: [
      {
        index: "/files/filesList",
        title: "文件管理",
        permiss: "20",
        name: "filesList",
      },
    ],
  },
  {
    icon: "User",
    index: "/members",
    title: "更换推荐人",
    permiss: "21",
    name: "members",
    subs: [
      {
        index: "/members/changeRecommend",
        title: "更换推荐人",
        permiss: "22",
        name: "changeRecommend",
      },
    ],
  },
  {
    icon: "Switch",
    index: "/additionals",
    title: "追加管理",
    permiss: "23",
    name: "additionals",
    subs: [
      {
        index: "/additionals/additionalYsg",
        title: "原始股",
        permiss: "24",
        name: "additionalYsg",
      },
      {
        index: "/additionals/additionalJf",
        title: "积分",
        permiss: "25",
        name: "additionalJf",
      },
    ],
  },
  {
    icon: "Stopwatch",
    index: "/records",
    title: "记录管理",
    permiss: "26",
    name: "records",
    subs: [
      {
        index: "/records/ysgRecords",
        title: "原始股记录",
        permiss: "27",
        name: "ysgRecords",
      },
      {
        index: "/records/zzjhRecords",
        title: "竹子计划",
        permiss: "28",
        name: "zzjhRecords",
      },
    ],
  },
  {
    icon: "Soccer",
    index: "/activitys",
    title: "活动管理",
    permiss: "29",
    name: "activitys",
    subs: [
      {
        index: "/activitys/shareTopTen",
        title: "分享日前十",
        permiss: "30",
        name: "shareTopTen",
      },
      {
        index: "/activitys/yslMonthTopTen",
        title: "原始股月前十",
        permiss: "31",
        name: "yslMonthTopTen",
      },
      {
        index: "/activitys/yslDayTopTen",
        title: "原始股日前十",
        permiss: "32",
        name: "yslDayTopTen",
      },
    ],
  },
  {
    icon: "CameraFilled",
    index: "/news",
    title: "新闻管理",
    permiss: "33",
    name: "news",
    subs: [
      {
        index: "/news/addNews",
        title: "添加新闻",
        permiss: "34",
        name: "addNews",
      },
      {
        index: "/news/newsList",
        title: "新闻列表",
        permiss: "35",
        name: "newsList",
      },
      {
        index: "/news/updateNews",
        title: "新闻编辑",
        permiss: "36",
        name: "updateNews",
      },
    ],
  },
  {
    icon: "StarFilled",
    index: "/integrals",
    title: "积分管理",
    permiss: "37",
    name: "integrals",
    subs: [
      {
        index: "/integrals/addIntegralP",
        title: "添加产品",
        permiss: "38",
        name: "addIntegralP",
      },
      {
        index: "/integrals/integrals",
        title: "产品列表",
        permiss: "39",
        name: "IntegralPList",
      },
    ],
  },
  {
    icon: "EditPen",
    index: "/artworks",
    title: "艺术管理",
    permiss: "40",
    name: "artworks",
    subs: [
      {
        index: "/artworks/addArtwork",
        title: "添加产品",
        permiss: "41",
        name: "addArtwork",
      },
      {
        index: "/artworks/artworks",
        title: "产品列表",
        permiss: "42",
        name: "artworkList",
      },
    ],
  },
  {
    icon: "ChatDotRound",
    index: "/orders",
    title: "订单管理",
    permiss: "44",
    name: "orders",
    subs: [
      {
        index: "/orders/integralOrders",
        title: "积分兑换",
        permiss: "44",
        name: "integralOrders",
      },
      {
        index: "/orders/artOrders",
        title: "艺术币兑换",
        permiss: "45",
        name: "artOrders",
      },
    ],
  },

  {
    icon: "User",
    index: "/cemetery",
    title: "墓园管理",
    permiss: "46",
    name: "cemetery",
    subs: [
      {
        index: "/cemetery/cemeteryAdd",
        title: "添加墓园",
        permiss: "47",
        name: "cemeteryAdd",
      },
      {
        index: "/cemetery/cemeteryList",
        title: "墓园列表",
        permiss: "48",
        name: "cemeteryList",
      },
    ],
  },
  {
    icon: "CloseBold",
    index: "/debts",
    title: "债务管理",
    permiss: "49",
    name: "debts",
    subs: [
      {
        index: "/debts/zhujie",
        title: "债务列表",
        permiss: "50",
        name: "zhujie",
      },
      {
        index: "/debts/zhujieDetails",
        title: "债务详情",
        permiss: "51",
        name: "zhujieDetails",
      },
    ],
  },
  {
    icon: "Headset",
    index: "/kangyang",
    title: "康养管理",
    permiss: "52",
    name: "kangyang",
    subs: [
      {
        index: "/kangyang/addKyMoney",
        title: "养康充值",
        permiss: "53",
        name: "addKyMoney",
      },
      {
        index: "/kangyang/addKyMoneyRecord",
        name: "addKyMoneyRecord",
        title: "充值记录",
        permiss: "54",
      },
      {
        index: "/kangyang/kyUsers",
        name: "kyUsers",
        title: "客户列表",
        permiss: "55",
      },
    ],
  },
  {
    icon: "Flag",
    index: "/shops",
    title: "店铺管理",
    permiss: "56",
    name: "shops",
    subs: [
      {
        index: "/shops/shopsList",
        title: "店铺管理",
        permiss: "57",
        name: "shopsList",
      },
    ],
  },
  {
    icon: "UserFilled",
    index: "/admin",
    title: "管理员管理",
    permiss: "58",
    name: "admin",
    subs: [
      {
        index: "/admin/adminList",
        title: "管理员列表",
        permiss: "59",
        name: "adminList",
      },
      {
        index: "/admin/adminAdd",
        title: "管理员添加",
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
