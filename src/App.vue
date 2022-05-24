<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <h1>App</h1> -->
    <router-view />
    <!-- <HelloWorld /> -->
  </el-config-provider>
</template>
