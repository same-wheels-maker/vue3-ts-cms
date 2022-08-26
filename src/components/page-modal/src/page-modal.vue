<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisivle" width="30%" center>
      <hy-form v-bind="modalConfig" v-model="formData"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisivle = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisivle = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import HyForm from '@/base-ui/form'

export default defineComponent({
  name: 'page-modal',
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup: (props) => {
    const dialogVisivle = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    return {
      dialogVisivle,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
