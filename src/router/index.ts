import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { usePermissStore } from "../store/permiss"
import Home from "../views/home.vue"
import { storeToRefs } from "pinia"
import { useUserInfo } from "../store/user"
import { toRaw } from "vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "系统首页",
          permiss: "1",
        },
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue"),
      },
      {
        path: "/attendance/signIn",
        name: "signIn",
        meta: {
          title: "签到",
          permiss: "3",
        },
        component: () =>
          import(
            /* webpackChunkName: "signIn" */ "../views/attendance/signIn.vue"
          ),
      },
      {
        path: "/attendance/summary",
        name: "summary",
        meta: {
          title: "总结",
          permiss: "4",
        },
        component: () =>
          import(
            /* webpackChunkName: "summary" */ "../views/attendance/summary.vue"
          ),
      },
      {
        path: "/attendance/leave",
        name: "leave",
        meta: {
          title: "请假",
          permiss: "5",
        },
        component: () =>
          import(
            /* webpackChunkName: "leave" */ "../views/attendance/leave.vue"
          ),
      },
      {
        path: "/attendance/onBT",
        name: "onBT",
        meta: {
          title: "出差",
          permiss: "6",
        },
        component: () =>
          import(/* webpackChunkName: "onBT" */ "../views/attendance/onBT.vue"),
      },
      {
        path: "/attendance/supplementary",
        name: "supplementary",
        meta: {
          title: "补签",
          permiss: "7",
        },
        component: () =>
          import(
            /* webpackChunkName: "supplementary" */ "../views/attendance/supplementary.vue"
          ),
      },
      {
        path: "/staff/staffList",
        name: "staffList",
        meta: {
          title: "员工列表",
          permiss: "9",
        },
        component: () =>
          import(
            /* webpackChunkName: "staffList" */ "../views/staff/staffList.vue"
          ),
      },
      {
        path: "/staff/addStaff",
        name: "addStaff",
        meta: {
          title: "员工添加",
          permiss: "10",
        },
        component: () =>
          import(
            /* webpackChunkName: "addStaff" */ "../views/staff/addStaff.vue"
          ),
      },
      {
        path: "/configs/branchCfg",
        name: "branchCfg",
        meta: {
          title: "分公司管理",
          permiss: "12",
        },
        component: () =>
          import(
            /* webpackChunkName: "branchCfg" */ "../views/configs/branchCfg.vue"
          ),
      },
      {
        path: "/configs/departmentCfg",
        name: "departmentCfg",
        meta: {
          title: "部门配置",
          permiss: "13",
        },
        component: () =>
          import(
            /* webpackChunkName: "departmentCfg" */ "../views/configs/departmentCfg.vue"
          ),
      },
      {
        path: "/configs/workCfg",
        name: "workCfg",
        meta: {
          title: "上班配置",
          permiss: "14",
        },
        component: () =>
          import(
            /* webpackChunkName: "workCfg" */ "../views/configs/workCfg.vue"
          ),
      },
      {
        path: "/configs/taskCfg",
        name: "taskCfg",
        meta: {
          title: "绩效配置",
          permiss: "15",
        },
        component: () =>
          import(
            /* webpackChunkName: "taskCfg" */ "../views/configs/taskCfg.vue"
          ),
      },
      {
        path: "/finance/wagesList",
        name: "wagesList",
        meta: {
          title: "工资",
          permiss: "17",
        },
        component: () =>
          import(
            /* webpackChunkName: "wagesList" */ "../views/finance/wagesList.vue"
          ),
      },
      {
        path: "/finance/reimbursement",
        name: "reimbursement",
        meta: {
          title: "报销",
          permiss: "18",
        },
        component: () =>
          import(
            /* webpackChunkName: "reimbursement" */ "../views/finance/reimbursement.vue"
          ),
      },
      {
        path: "/files/filesList",
        name: "filesList",
        meta: {
          title: "文件管理",
          permiss: "20",
        },
        component: () =>
          import(
            /* webpackChunkName: "filesList" */ "../views/files/filesList.vue"
          ),
      },
      {
        path: "/members/changeRecommend",
        name: "changeRecommend",
        meta: {
          title: "更换推荐人",
          permiss: "22",
        },
        component: () =>
          import(
            /* webpackChunkName: "changeRecommend" */ "../views/members/changeRecommend.vue"
          ),
      },
      {
        path: "/additionals/additionalYsg",
        name: "additionalYsg",
        meta: {
          title: "原始股",
          permiss: "24",
        },
        component: () =>
          import(
            /* webpackChunkName: "additionalYsg" */ "../views/additionals/additionalYsg.vue"
          ),
      },
      {
        path: "/additionals/additionalJf",
        name: "additionalJf",
        meta: {
          title: "积分",
          permiss: "25",
        },
        component: () =>
          import(
            /* webpackChunkName: "additionalJf" */ "../views/additionals/additionalJf.vue"
          ),
      },
      {
        path: "/records/ysgRecords",
        name: "ysgRecords",
        meta: {
          title: "原始股记录",
          permiss: "27",
        },
        component: () =>
          import(
            /* webpackChunkName: "ysgRecords" */ "../views/records/ysgRecords.vue"
          ),
      },
      {
        path: "/records/zzjhRecords",
        name: "zzjhRecords",
        meta: {
          title: "竹子计划",
          permiss: "28",
        },
        component: () =>
          import(
            /* webpackChunkName: "zzjhRecords" */ "../views/records/zzjhRecords.vue"
          ),
      },
      {
        path: "/activitys/shareTopTen",
        name: "shareTopTen",
        meta: {
          title: "分享日前十",
          permiss: "30",
        },
        component: () =>
          import(
            /* webpackChunkName: "shareTopTen" */ "../views/activitys/shareTopTen.vue"
          ),
      },
      {
        path: "/activitys/yslMonthTopTen",
        name: "yslMonthTopTen",
        meta: {
          title: "原始股月前十",
          permiss: "31",
        },
        component: () =>
          import(
            /* webpackChunkName: "yslMonthTopTen" */ "../views/activitys/yslMonthTopTen.vue"
          ),
      },
      {
        path: "/activitys/yslDayTopTen",
        name: "yslDayTopTen",
        meta: {
          title: "原始股日前十",
          permiss: "32",
        },
        component: () =>
          import(
            /* webpackChunkName: "yslDayTopTen" */ "../views/activitys/yslDayTopTen.vue"
          ),
      },
      {
        path: "/news/addNews",
        name: "addNews",
        meta: {
          title: "添加新闻",
          permiss: "34",
        },
        component: () =>
          import(/* webpackChunkName: "addNews" */ "../views/news/addNews.vue"),
      },
      {
        path: "/news/newsList",
        name: "newsList",
        meta: {
          title: "新闻列表",
          permiss: "35",
        },
        component: () =>
          import(
            /* webpackChunkName: "newsList" */ "../views/news/newsList.vue"
          ),
      },
      {
        path: "/news/updateNews",
        name: "updateNews",
        meta: {
          title: "新闻编辑",
          permiss: "36",
        },
        component: () =>
          import(
            /* webpackChunkName: "updateNews" */ "../views/news/updateNews.vue"
          ),
      },
      {
        path: "/integrals/addIntegralP",
        name: "addIntegralP",
        meta: {
          title: "添加产品",
          permiss: "38",
        },
        component: () =>
          import(
            /* webpackChunkName: "addIntegralP" */ "../views/integrals/addIntegralP.vue"
          ),
      },
      {
        path: "/integrals/integrals",
        name: "IntegralPList",
        meta: {
          title: "产品列表",
          permiss: "39",
        },
        component: () =>
          import(
            /* webpackChunkName: "integrals" */ "../views/integrals/integrals.vue"
          ),
      },
      {
        path: "/artworks/addArtwork",
        name: "addArtwork",
        meta: {
          title: "添加产品",
          permiss: "41",
        },
        component: () =>
          import(
            /* webpackChunkName: "addArtwork" */ "../views/artworks/addArtwork.vue"
          ),
      },
      {
        path: "/artworks/artworks",
        name: "artworkList",
        meta: {
          title: "产品列表",
          permiss: "42",
        },
        component: () =>
          import(
            /* webpackChunkName: "artworks" */ "../views/artworks/artworks.vue"
          ),
      },
      {
        path: "/orders/integralOrders",
        name: "integralOrders",
        meta: {
          title: "积分兑换",
          permiss: "44",
        },
        component: () =>
          import(
            /* webpackChunkName: "integralOrders" */ "../views/orders/integralOrders.vue"
          ),
      },
      {
        path: "/orders/artOrders",
        name: "artOrders",
        meta: {
          title: "艺术币兑换",
          permiss: "45",
        },
        component: () =>
          import(
            /* webpackChunkName: "artOrders" */ "../views/orders/artOrders.vue"
          ),
      },
      {
        path: "/cemetery/cemeteryAdd",
        name: "cemeteryAdd",
        meta: {
          title: "添加墓园",
          permiss: "47",
        },
        component: () =>
          import(
            /* webpackChunkName: "cemeteryAdd" */ "../views/cemetery/cemeteryAdd.vue"
          ),
      },
      {
        path: "/cemetery/cemeteryList",
        name: "cemeteryList",
        meta: {
          title: "墓园列表",
          permiss: "48",
        },
        component: () =>
          import(
            /* webpackChunkName: "cemeteryList" */ "../views/cemetery/cemeteryList.vue"
          ),
      },
      {
        path: "/debts/zhujie",
        name: "zhujie",
        meta: {
          title: "债务列表",
          permiss: "50",
        },
        component: () =>
          import(/* webpackChunkName: "zhujie" */ "../views/debts/zhujie.vue"),
      },
      {
        path: "/debts/zhujieDetails",
        name: "zhujieDetails",
        meta: {
          title: "债务详情",
          permiss: "51",
        },
        component: () =>
          import(
            /* webpackChunkName: "zhujieDetails" */ "../views/debts/zhujieDetails.vue"
          ),
      },
      {
        path: "/kangyang/addKyMoney",
        name: "addKyMoney",
        meta: {
          title: "养康充值",
          permiss: "53",
        },
        component: () =>
          import(
            /* webpackChunkName: "addKyMoney" */ "../views/kangyang/addKyMoney.vue"
          ),
      },
      {
        path: "/kangyang/addKyMoneyRecord",
        name: "addKyMoneyRecord",
        meta: {
          title: "充值记录",
          permiss: "54",
        },
        component: () =>
          import(
            /* webpackChunkName: "addKyMoneyRecord" */ "../views/kangyang/addKyMoneyRecord.vue"
          ),
      },
      {
        path: "/kangyang/kyUsers",
        name: "kyUsers",
        meta: {
          title: "客户列表",
          permiss: "55",
        },
        component: () =>
          import(
            /* webpackChunkName: "kyUsers" */ "../views/kangyang/kyUsers.vue"
          ),
      },
      {
        path: "/shops/shopsList",
        name: "shopsList",
        meta: {
          title: "店铺管理",
          permiss: "57",
        },
        component: () =>
          import(
            /* webpackChunkName: "shopsList" */ "../views/shops/shopsList.vue"
          ),
      },
      {
        path: "/admin/adminList",
        name: "adminList",
        meta: {
          title: "管理员列表",
          permiss: "59",
        },
        component: () =>
          import(
            /* webpackChunkName: "adminList" */ "../views/admin/adminList.vue"
          ),
      },
      {
        path: "/admin/adminAdd",
        name: "adminAdd",
        meta: {
          title: "管理员添加",
          permiss: "60",
        },
        component: () =>
          import(
            /* webpackChunkName: "adminAdd" */ "../views/admin/adminAdd.vue"
          ),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "个人中心",
        },
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user.vue"),
      },
      {
        path: "/tabs",
        name: "tabs",
        meta: {
          title: "tab标签",
        },
        component: () =>
          import(/* webpackChunkName: "tabs" */ "../views/tabs.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/403",
    name: "403",
    meta: {
      title: "没有权限",
    },
    component: () => import(/* webpackChunkName: "403" */ "../views/403.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "找不到页面",
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const { token } = storeToRefs(useUserInfo())
  const permiss = usePermissStore()

  if (!token.value && to.path !== "/login") {
    next("/login")
  } else if (token.value && to.path === "/login") {
    next(from.path)
  } else if (
    to.meta.name &&
    !toRaw(permiss.key).includes(to.meta.name as string)
  ) {
    // 如果没有权限，则进入403
    next("/403")
  } else {
    next()
  }
  document.title = `${to.meta.title} | 到门口后台管理系统`
})

export default router
