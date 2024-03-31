<template>
 <div class="navbar">
    <el-row class="title-box">
      <div class="title">软件平台BI系统</div>
      <el-col :span="1">
        <el-button link @click="appLayoutStore.toggleCollapse"><el-icon  :size="25"><fold /></el-icon></el-button>
      </el-col>
    </el-row>
    <el-row class="system-box">
      <el-dropdown  trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          系统设置
        <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="1">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </template>
      </el-dropdown>
      <div class="block">
        <el-avatar :size="30" :src="circleUrl" />
      </div>
       <svg-icon iconName="icon-renyuan"></svg-icon>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  import { useLoginStore } from '@/store/modules/login/login.ts'
  import {useRouter} from 'vue-router'
  const appLayoutStore = useAppLayoutStore()
  // const appLoginStore = useLoginStore()
  const router = useRouter()
  const circleUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
  const handleCommand = (command: string | number | object) => {
    if(command == '1'){
      // appLoginStore.logout()
      router.push({ path: '/' })
      localStorage.clear()
    }
  }
</script>

<style scoped lang="scss">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.block{
  margin-left: 10px;
}
</style>
