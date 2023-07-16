<template>
  <el-icon @click="store.setIsCollapse">
    <Fold v-if="store.isCollapse" />
    <Expand v-else />
  </el-icon>
  <!-- <i :class="collapseIcon" @click="handleCollapse" /> -->
</template>

<script lang="ts" setup>
  import { useCommonStore } from '@/store/common'
  // import { computed } from 'vue'

  const store = useCommonStore()

  // const collapseIcon = computed(() => {
  //   return !store.state.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
  // })

  // const handleCollapse = () => {
  //   store.commit('setIsCollapse', !store.state.isCollapse)
  // }
</script>

<style lang="scss" scoped></style>
