<template>
  <div class="page">
    <div class="main-body">
      <div class="page-filter">
        <el-row :gutter="20" justify="start">
          <el-col :span="6">
            <el-select
              v-model="pageInfo.gvsProjectName"
              placeholder="请选择项目"
              clearable
            >
              <el-option
                v-for="item in projectList"
                :key="item.label+item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </el-col>
          <el-col :span="1">
            <el-button type="primary" @click="getList">
              <icon-ep-search/>
            </el-button>
          </el-col>
        </el-row>
      </div>
      <div class="page-table">
        <el-table :data="dataList.list" stripe style="width: 100%" >
          <el-table-column prop="gvsProjectName" label="泰克项目名" />
          <el-table-column prop="projectNames" label="Git项目名" />
          <el-table-column prop="department" label="事业部" />
          <el-table-column prop="gvsUserNames" label="项目成员">
            <template #default="{ row }">
              <span v-if="!row.gvsUserNames" class="no-tip">暂无</span>
              <div v-else>
                <el-tag v-for="(item,index) in row.gvsUserNames" :key="index">{{item}}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="actions" label="操作">
            <template #default="{ row }">
              <el-button @click="addGitProject(1,row)" icon="Edit" type="primary" plain>修改</el-button>
              <el-button icon="Delete" type="danger" plain>删除</el-button>
            </template>
          </el-table-column>
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
    <div>
      <UpdateProject ref="updateProjectRef" @getList="getList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted,reactive,ref } from 'vue'
import { relationList,getBugSystemName } from '@/api/dataBase/projectManager'
import Page from '@/components/Page/index.vue'
import UpdateProject from './components/updateProject.vue';
import { useI18n } from 'vue-i18n';

const { t: $t } = useI18n()

interface PageInfoType {
  index: number;
  size: number;
  total: number;
  gvsProjectName: string;
}
let pageInfo:PageInfoType = reactive({
  index: 1,
  size: 10,
  total: 0,
  gvsProjectName: ''
})

const dataList = reactive({
  list: [],
  loading: false,
})
// interface itemType {
//   value: string;
//   label: string;
// }
const projectList = ref([] as any[])
const updateProjectRef = ref()
const getList = () => {
  let Info = {
    index: pageInfo.index,
    size: pageInfo.size,
    total: pageInfo.total,
    gvsProjectName: pageInfo.gvsProjectName
  };
  relationList(Info).then((res:any) => {
    dataList.list = res.data.records
    pageInfo.total = res.data.total
  })
}
const getPageList = (pageIndex:number) => {
  pageInfo.index = pageIndex
  getList()
}
const getPageSize = (pageSize:number) => {
  pageInfo.size = pageSize
  getList()
}
onMounted(() => {
  getList()
  getRelationGvsProject()
})
const getRelationGvsProject = () => {
  let Info = {
    index: pageInfo.index,
    size: pageInfo.size,
  };
  getBugSystemName(Info).then((response:any) => {
    const { data } = response
    //定义item的类型
    projectList.value = data.projectName.map((item:string) => {
      return {
        value: item,
        label: item
      }
    })
  })
}
const addGitProject=(type:number,row:any)=>{
  updateProjectRef.value.dialogInfo.dialogVisible = true
  if (type == 1) {
    updateProjectRef.value.dialogInfo.title = $t('common.edit')
    updateProjectRef.value.dialogInfo.isEdit = true
    updateProjectRef.value.formData.gvsProjectName = row.gvsProjectName
    updateProjectRef.value.formData.projectIds = row.projectIds
  } else {
    updateProjectRef.value.dialogInfo.title = $t('common.add')
    updateProjectRef.value.dialogInfo.isEdit = false
  }
}

</script>

<style scoped>
.el-tag{
  margin-right: 5px;
  margin-bottom: 5px;

}
</style>
