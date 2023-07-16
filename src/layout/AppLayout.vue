<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header><AppHeader /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import AppMenu from './components/AppMenu/index.vue'
  import AppHeader from './components/AppHeader/index.vue'
</script>

<style scoped>
  .el-header {
    background-color: #ffffff;
    color: 口#333;
    text-align: center;
    /* line-height: 60px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    width: auto;
    background-color: #26354e;
    /* color: 口#333; */
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #e9eef3;
    /* color: 口#333; */
    /* text-align: center; */
    /* line-height: 160px; */
  }
  .el-container {
    height: 100vh;
  }
</style>
