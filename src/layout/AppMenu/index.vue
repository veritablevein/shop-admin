<script lang="ts" setup>

</script>

<template>
  <el-menu
    active-text-color="#2d8cf0"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><List /></el-icon>
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <el-icon><Grid /></el-icon>
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <el-icon><Reading /></el-icon>
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <el-icon><Comment /></el-icon>
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Tickets /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        <el-icon><List /></el-icon>
        <template #title>
          订单列表
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Film /></el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Lock /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_admin">
        <el-icon><Avatar /></el-icon>
        <template #title>
          管理员
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/permission_role">
        <el-icon><User /></el-icon>
        <template #title>
          角色
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        <el-icon><Document /></el-icon>
        <template #title>
          规则
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse){
  width: 200px;
  min-height: 400px;
}
</style>
