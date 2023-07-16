<template>
  <el-dialog
    ref="dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @open="onDialogOpen"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCancelClick"> Cancel </el-button>
        <el-button :loading="confirmLoading" type="primary" @click="handleConfirm">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { PropType, ref } from 'vue'
  import { IElDialog } from '@/types/element-plus'

  const dialog = ref<IElDialog>()
  const confirmLoading = ref(false)
  const props = defineProps({
    confirm: {
      type: Function as PropType<() => Promise<void>>,
      default: () => Promise.resolve(),
    },
  })
  interface emitsType {
    (e: 'open'): void
    (e: 'cancel'): void
    (e: 'confirm'): void
  }
  const emit = defineEmits<emitsType>()
  const onDialogOpen = () => {
    emit('open')
  }
  const onCancelClick = () => {
    if (dialog.value !== null) {
      console.log(dialog.value)
      dialog.value.visible = false
    }
    emit('cancel')
  }
  const handleConfirm = async () => {
    confirmLoading.value = true
    await props.confirm()
    confirmLoading.value = false
  }
</script>

<style lang="scss" scoped></style>
