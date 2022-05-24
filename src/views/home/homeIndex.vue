<script lang="ts" setup>
import { useStore } from '@/store'
import User from '@/api/user'

const store = useStore()

console.log(store.state.count)
console.log(User)

</script>

<template>
  <h1>首页</h1>
</template>

<style lang="scss" scoped>
h1 {
  color: $color
}

</style>
