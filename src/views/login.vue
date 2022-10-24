<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="name">
          <el-input v-model="param.name" placeholder="username">
            <template #prepend>
              <el-button :icon="User"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter="submitForm(login)"
          >
            <template #prepend>
              <el-button :icon="Lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm(login)">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useTagsStore } from "../store/tags"
import { usePermissStore } from "../store/permiss"
import { useRouter, RouteRecordRaw } from "vue-router"
import { ElMessage } from "element-plus"
import type { FormInstance, FormRules } from "element-plus"
import { Lock, User } from "@element-plus/icons-vue"
import { GetLogin, GetRouter } from "../utils/login"
import { storeToRefs } from "pinia"
import { useUserInfo } from "../store/user"

const { token, userInfo } = storeToRefs(useUserInfo())
const { key } = storeToRefs(usePermissStore())

const router = useRouter()
const param = reactive<{
  name: string
  password: string
}>({
  name: "admin",
  password: "xhb19880130zz",
})

const rules: FormRules = {
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "change",
    },
  ],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
}
const permiss = usePermissStore()
const login = ref<FormInstance>()
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid: boolean) => {
    if (valid) {
      const { data } = await GetLogin(param)
      token.value = data.token
      if (data.success) {
        const { data: result } = await GetRouter()
        if (result.code === 200) {
          userInfo.value = result
          ElMessage.success("登录成功")
          /*  const routerList = router.options.routes[1] */

          key.value = userInfo.value.access
          /*     permiss.defaultList[result.name == "admin" ? "admin" : "user"] */
          router.push("/")
        }
      } else {
        ElMessage.error(data.message)
      }
    } else {
      ElMessage.error("登录失败")
      return false
    }
  })
}

const tags = useTagsStore()
tags.clearTags()
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
