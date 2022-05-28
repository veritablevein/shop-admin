<script lang="ts" setup>
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <el-row
            type="flex"
            align="middle"
          >
            <AppHeader />
          </el-row>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  ;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  border-color: #E9EEF3;
  color: #333;
}

.el-container {
  height: 100vh;
  background-color: #e8eef3;
}

.el-row {
  height: 100%;
}
</style>
