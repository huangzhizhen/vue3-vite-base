<template>
  <el-menu-item :index="path" v-if="isElMenuItem">
    <el-icon>
      <kvIcon :name="icon" class="icons"/>
    </el-icon>
	  <span>{{ title }}</span>
  </el-menu-item>
  <div v-else>
    <el-icon>
      <kvIcon :name="icon" class="icons"/>
    </el-icon>
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
  // defineProps({
  //   icon: String||Object,
  //   title: String,
  //   path: String,
  //   isElMenuItem: Boolean
  // })

  defineProps(['icon', 'title', 'path', 'isElMenuItem'])
</script>

<style scoped>
/* Your style code here */
</style>
