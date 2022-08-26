<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
import { modalConfig } from '@/views/main/system/user/config/modal.config'
import { usePageSearch } from '@/hooks/use-page-search'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup: () => {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const defaultInfo = ref({})

    const handleNewData = () => {
      if (pageModalRef.value) pageModalRef.value.dialogVisivle = true
    }

    const handleEditData = async (item: any) => {
      defaultInfo.value = { ...item }
      setTimeout(() => {
        if (pageModalRef.value) pageModalRef.value.dialogVisivle = true
      })
    }

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      defaultInfo,

      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped lang="less"></style>
