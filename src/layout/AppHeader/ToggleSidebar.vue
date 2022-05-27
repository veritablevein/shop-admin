<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<template>
  <el-icon>
    <component
      :is="!store.state.isCollapse ? 'Fold' : 'Expand'"
      @click="handleCollapse"
    />
  </el-icon>
</template>

<style lang="scss" scoped>

</style>
