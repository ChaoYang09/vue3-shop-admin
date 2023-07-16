<template>
  <el-pagination
    :current-page="props.page"
    :page-size="props.limit"
    :page-sizes="[5, 10, 15, 20]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="props.total"
    background
    @size-change="handlePageSizeChange"
    @current-change="handleCurrentPageChange"
  >
    <!-- :disabled="listLoading" -->
  </el-pagination>
</template>

<script lang="ts" setup>
  const props = defineProps({
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 5,
    },
    total: {
      type: Number,
      default: 0,
    },
    loadList: {
      type: Function,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {},
    },
  })
  interface emitType {
    (e: 'update:page', page: number): void
    (e: 'update:limit', size: number): void
  }
  const emit = defineEmits<emitType>()
  const handleCurrentPageChange = async (page: number) => {
    emit('update:page', page)

    await props.loadList()
  }
  const handlePageSizeChange = async (size: number) => {
    emit('update:limit', size)
    emit('update:page', 1)
    // listParams.limit = size
    // listParams.page = 1
    await props.loadList()
  }
</script>

<style lang="scss" scoped></style>
