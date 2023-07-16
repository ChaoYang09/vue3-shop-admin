<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      {{ (store.user && store.user.account) || 'Demo' }}
      <el-icon>
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { logout } from '@/api/common'
  import { useCommonStore } from '@/store/common'

  import { useRouter } from 'vue-router'
  const store = useCommonStore()
  const router = useRouter()
  const handleLogout = () => {
    ElMessageBox.confirm('是否退出登录?', '退出登录', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    })
      .then(async () => {
        await logout()

        router.push({
          name: 'login',
        })
        store.setUser(null)
        ElMessage({
          type: 'success',
          message: '退出成功',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消退出',
        })
      })
  }
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
</style>
