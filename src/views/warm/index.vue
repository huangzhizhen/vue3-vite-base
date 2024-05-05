<template>
  <div class="page">
    <div class="main-body">
    <h1>menu图标</h1>
    <IconMenuBar/>
    <IconMenuCompany/>
    <el-icon color="#409eff" :size="20">
      <IconMenuPerson/>
    </el-icon>
    <h1>home图标</h1>
    <!-- <IconHomeBar1/> -->
    <icon-home-bar1/>
    <el-icon color="#409eff" :size="20">
      <IconHomeBar1/>
    </el-icon>
    </div>
    <p>
      {{ $t('common.testName') }}
    </p>
  </div>
</template>

<script setup lang="ts">
</script>
