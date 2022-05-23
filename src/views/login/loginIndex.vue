<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { ILoginInfo } from '@/api/type/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(data => {
    // res: axios 包装的响应对象，data、status
    // res.data: 后端真实返回的数据
    // console.log(data.login_logo)
    list.value = data.slide
    console.log(data)
    console.log(list.value)
  })
})
</script>

<template>
  <h1>登录</h1>
</template>

<style lang="scss" scoped>

</style>
