<template>
  <el-icon @click="toggleFullscreen"><FullScreen /></el-icon>
</template>

<script lang="ts" setup>
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }
</script>

<style lang="scss" scoped></style>
