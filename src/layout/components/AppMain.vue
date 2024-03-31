<template>
  <el-main>
    <section class="app-main">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/baseData/personManger' }">首页</el-breadcrumb-item>
         <template v-for="(item, index) in breadList" :key="index">
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
  import { ref,watch } from 'vue';
  import { useRoute } from 'vue-router';
  // 当前路由的匹配记录
  const route = useRoute()
  let breadList:string[] = ref([])
  breadList.value = route.matched
  const appLayoutStore = useAppLayoutStore()
  watch(() => route.matched, (matched) => {
    appLayoutStore.setActiveIndex(matched[1].path)
    breadList.value = matched
  })
</script>

<style scoped>
</style>
