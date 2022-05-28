<script lang="ts" setup>
import { getLoginInfo, getCaptcha } from '@/api/common'
import { ILoginInfo } from '@/api/type/common'
import { onMounted, reactive, ref } from 'vue'

const form = ref(null)
const list = ref<ILoginInfo['slide']>([])

const captchaSrc = ref('')
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref({
  account: [
    { required: true, message: '请输入帐号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  loadCaptcha()
  getLoginInfo().then(data => {
    // res: axios 包装的响应对象，data、status
    // res.data: 后端真实返回的数据
    // console.log(data.login_logo)
    list.value = data.slide
    console.log(data)
    console.log(list.value)
  })
})

const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}

const handleSubmit = async () => {
  console.log('handleSubmit')
}

// 表单验证

// 验证通过
// 请求提交
// 处理响应
</script>

<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form_header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon>
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          type="password"
          v-model="user.pwd"
          placeholder="请输入密码"
        >
          <template>
            <el-icon>
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template>
              <el-icon>
                <Key />
              </el-icon>
            </template>
          </el-input>
          <img
            class="imgcode"
            :src="captchaSrc"
            alt="验证码"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}
.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }
  .el-form-item:last-child {
    margin-bottom: 0;
  }
  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }
  .submit-button {
    width: 100%;
  }
  .login-logo {
    width: 271px;
    height: 74px;
    display: flex;
    margin: auto;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
