<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in routes" :key="item.path" :to="{ path: item.path }">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  console.log(router)
  const routes = computed(() => {
    return router.currentRoute.value.matched.filter((item) => {
      return item.meta.title
    })
  })
</script>

<style scoped></style>
