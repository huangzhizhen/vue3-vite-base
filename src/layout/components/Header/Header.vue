<template>
 <div class="navbar">
    <el-row class="title-box">
      <el-icon :size="20" color="#1890ff">
        <icon-logos-atlassian/>
      </el-icon>
      <div class="title">软件平台BI系统</div>
      <el-col :span="1">
        <el-button link @click="appLayoutStore.toggleCollapse"><el-icon  :size="25"><IconEpFold /></el-icon></el-button>
      </el-col>
    </el-row>
    <el-row class="system-box">
      <!-- <el-dropdown  trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          系统设置
          <el-icon class="el-icon--right">
            <IconEpArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="1">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
      <el-dropdown  trigger="click" @command="handleLang">
        <span class="el-dropdown-link">
          <div class="setting-icon">
            <el-icon>
              <IconOouiLanguage />
            </el-icon>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="1">中文</el-dropdown-item>
            <el-dropdown-item command="2">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div class="setting-icon">
        <el-icon>
          <IconUilSetting />
        </el-icon>
      </div>
      <div class="block">
        <el-icon :size="26" color="#409EFF">
          <IconCarbonUserAvatarFilledAlt />
        </el-icon>
      </div>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  import { useAppStore } from '@/store/modules/app/index.ts'
  import { useRouter } from 'vue-router'
  const appLayoutStore = useAppLayoutStore()
  const appStore = useAppStore()
  const router = useRouter()
  import { ref } from 'vue'
  const circleUrl = "./../../../assets/avtar.png"
  const handleCommand = (command: string | number | object) => {
    if(command == '1'){
      router.push({ path: '/' })
      localStorage.clear()
    }
  }
  const handleLang = (command: string | number | object) => {
    console.log(command)
    if(command == '1'){
      appStore.setAppLang('zh')
    } else{
      appStore.setAppLang('en')
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
.setting-icon{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setting-icon:hover{
  background-color: #e6e6e64a;
  cursor: pointer;
  border-radius: 5px;
}
</style>
