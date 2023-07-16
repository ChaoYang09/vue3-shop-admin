<template>
  <el-menu
    active-text-color="#2d8cf0"
    background-color="#26354e"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="store.isCollapse"
  >
    <!-- <el-menu-item>
      <el-icon><Menu /></el-icon>
      <span>主页</span>
    </el-menu-item> -->

    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 商品 -->
    <el-sub-menu index="/product">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">
        <el-icon>
          <location />
        </el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/classify">
        <el-icon>
          <location />
        </el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/attr">
        <el-icon>
          <location />
        </el-icon>
        <span>商品规格</span>
      </el-menu-item>

      <el-menu-item index="/product/reply">
        <el-icon>
          <location />
        </el-icon>
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- 订单 -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>订单</span>
      </template>
    </el-sub-menu>
    <!-- 营销 -->
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>营销</span>
      </template>
    </el-sub-menu>
    <!-- 设置 -->
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon>
          <Menu />
        </el-icon>
        <span>设置</span>
      </template>
      <el-menu-item index="/permission/admin">管理</el-menu-item>
      <el-menu-item index="/permission/role">角色</el-menu-item>
      <el-menu-item index="/permission/rule">规则</el-menu-item>
    </el-sub-menu>
    <!-- 维护 -->
    <el-sub-menu index="5">
      <template #title>
        <el-icon>
          <Tools />
        </el-icon>
        <span>维护</span>
      </template>
      <el-menu-item index="/maintain/attachment">附件管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useCommonStore } from '@/store/common'

  const store = useCommonStore()
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
