<script lang="ts" setup>

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  border-color: #E9EEF3;
  color: #333;
}

.el-container {
  height: 100vh;
}
</style>
