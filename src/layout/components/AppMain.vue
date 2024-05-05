<template>
  <el-main>
    <section class="app-main">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/baseData/personManger' }">首页</el-breadcrumb-item>
        <template v-for="item in breadList" :key="item.meta.title">
          <el-breadcrumb-item :to="{path:item.redirect==undefined?item.path:item.path+item.redirect}">{{ item.meta.title }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
      <Content />
    </section>
  </el-main>
</template>

<script setup lang="ts">
  import Content from '@/layout/components/Content/Content.vue'
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  import { Ref, ref,watch } from 'vue';
  import { RouteLocationMatched, useRoute } from 'vue-router';
  // 当前路由的匹配记录
  const route = useRoute()
  let breadList: Ref<RouteLocationMatched[]> = ref([])
  breadList.value = route.matched
  const appLayoutStore = useAppLayoutStore()
  watch(() => route.matched, (matched) => {
    appLayoutStore.setActiveIndex(matched[1].path)
    breadList.value = matched
  })
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner){
  color: #1890ff;
  font-weight: 500;
} */
</style>
