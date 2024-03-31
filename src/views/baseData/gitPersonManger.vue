<template>
  <div class="page">
    <div class="main-body">
      <div class="page-table">
        <el-table :data="dataList.list" stripe style="width: 100%" >
          <el-table-column prop="gvsUserName" label="姓名" />
          <el-table-column prop="userEmail" label="邮箱" />
          <el-table-column prop="userName" label="git账号" />
        </el-table >
      </div>
      <Page
        @on-page-size-change="getPageSize"
        @on-change="getPageList"
        :total="pageInfo.total"
        :currentPage="pageInfo.index"
        :currentPageSize="pageInfo.size"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted,reactive } from 'vue'
import { getPersonList } from '@/api/dataBase/gitPersonManager'
import Page from '@/components/Page/index.vue'
const pageInfo = reactive({
  index: 1,
  size: 10,
  total: 0,
})
const dataList = reactive({
  list: [],
  loading: false,
})
const getList = () => {
  let Info = {
    index: pageInfo.index,
    size: pageInfo.size,
    total: pageInfo.total,
  };
  getPersonList(Info).then(res => {
    console.log(res)
    dataList.list = res.data.records
    pageInfo.total = res.data.total
  })
}
const getPageList = (pageIndex:number) => {
  pageInfo.index = pageIndex
  getList()
  // getList()
}
const getPageSize = (pageSize:number) => {
  pageInfo.size = pageSize
  getList()
}
onMounted(() => {
  getList()
})
</script>

<style scoped>
</style>
