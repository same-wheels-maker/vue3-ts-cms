<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <fold v-if="isFold" />
      <expand v-else />
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'nav-header',
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ['changeFold'],
  setup: (props, { emit }) => {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }

    // 面包屑数据
    const store = useStore()
    const userMenus = store.state.login.userMenus
    const route = useRoute()
    const breadcrumbs = computed(() => {
      return pathMapBreadcrumbs(userMenus, route.path)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 22px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
