<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue'
import ToggleSidebar from './ToggleSidebar.vue'
import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'
import 'element-plus/theme-chalk/display.css'

// const goBack = () => {
//   console.log('go back')
// }
</script>

<template>
  <el-col
    class="header-left"
    :xs="3"
    :sm="1"
    :md="1"
    :lg="1"
    :xl="1"
  >
    <ToggleSidebar />
  </el-col>
  <el-col
    class="header-left hidden-xs-only"
    :xs="15"
    :sm="15"
    :md="15"
    :lg="15"
    :xl="15"
  >
    <Breadcrumb />
  </el-col>
  <el-col
    class="header-right"
    :xs="5"
    :sm="5"
    :md="5"
    :lg="5"
    :xl="5"
  >
    <MenuSearch />
  </el-col>
  <el-col
    class="header-right"
    :xs="3"
    :sm="1"
    :md="1"
    :lg="1"
    :xl="1"
  >
    <FullScreen />
  </el-col>
  <el-col
    class="header-right"
    :xs="3"
    :sm="1"
    :md="1"
    :lg="1"
    :xl="1"
  >
    <Notification />
  </el-col>
  <el-col
    class="header-right"
    :xs="3"
    :sm="1"
    :md="1"
    :lg="1"
    :xl="1"
  >
    <UserInfo />
  </el-col>
</template>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  .el-input {
    width: 200px;
  }
}
</style>
