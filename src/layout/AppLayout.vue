<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container >
        <el-aside class="sidebar-container" :style="{'width':(isCollapse?'63px':'210px')}">
          <AppMenu/>
        </el-aside>
        <AppMain></AppMain>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
  import {computed} from 'vue'
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  import Header from './components/Header/Header.vue'
  import AppMenu from './components/AppMenu/AppMenu.vue'
  import AppMain from './components/AppMain.vue';
  const appLayoutStore = useAppLayoutStore()
  const isCollapse = computed(() => appLayoutStore.isCollapse);
</script>
<style scoped>
</style>
