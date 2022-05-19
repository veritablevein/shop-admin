<script lang="ts" setup>
import { useStore } from '../../store'

const store = useStore()

console.log(store.state.count)

</script>

<template>
  <h1>首页</h1>
  <p>{{ store.state.count }}</p>
  <p>{{ store.state.foo }}</p>
</template>

<style lang="scss" scoped>

</style>
