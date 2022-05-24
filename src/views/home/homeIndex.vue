<script lang="ts" setup>
import { useStore } from '@/store'
import User from '@/api/user'

const store = useStore()

console.log(store.state.count)
console.log(User)

const value1 = ''
</script>

<template>
  <h1>首页</h1>
  <el-button size="small">
    测试按钮
  </el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期"
  />
  <p>{{ store.state.count }}</p>
  <p>{{ store.state.foo }}</p>
  <img
    src="@/assets/logo.png"
    alt="logo"
  >
  <div class="box" />
  <a
    style="font-size:1rem;font-weight:bold;background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);-webkit-background-clip: text;color: transparent;"
    href="https://gitlab.com/oeyoews/tw5/"
    target="_blank"
  >FishForYou</a>
</template>

<style lang="scss" scoped>
h1 {
  color: $color
}

.box{
  width: 200px;
  height: 200px;
  background: url("@/assets/logo.png");
}

</style>
