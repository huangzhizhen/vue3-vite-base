<template>
  <div class="dialog-contain">
    <el-dialog
      v-model="dialogInfo.dialogVisible"
      width="35%"
      :before-close="handleClose"
    >
    <template #header>
      <div>
        {{ dialogInfo.title }}
      </div>
    </template>
      <el-form
        label-position="left"
        label-width="auto"
        :model="formData"
        style="max-width: 600px"
      >
        <el-form-item label="泰克系统项目名">
          <el-select
              v-model="formData.gvsProjectName"
              placeholder="请选择泰克系统项目名"
              clearable
              :disabled="dialogInfo.isEdit"
            >
              <el-option
                v-for="item in selectDatas.projectName"
                :key="item.label+item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
        </el-form-item>
        <el-form-item label="Git项目名">
          <el-select
              v-model="formData.projectIds"
              placeholder="请选择Git项目名"
              clearable
              multiple
            >
              <el-option
                v-for="item in selectDatas.projectList"
                :key="item.projectId"
                :label="item.projectName"
                :value="item.projectId"/>
            </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="confirm">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {getProjectNameList,getBugSystemName,relationGvsProject} from '@/api/dataBase/projectManager'
import { ElMessage } from 'element-plus';
import { reactive,watch} from 'vue'
const dialogInfo = reactive({
  dialogVisible: false,
  title: '新增',
  isEdit: false
})
interface FormData {
  gvsProjectName: string,
  projectIds: Array<number>,
  row: any
}
interface SelectDatas {
  projectName: Array<{value: string,label: string}>,
  projectList: Array<{projectId: number, projectName: string}>
}
const formData:FormData = reactive({
  gvsProjectName: '',
  projectIds: [],
  row: {}
})
const selectDatas:SelectDatas = reactive({
  projectName: [],
  projectList: [],
})
const getProjectName = () => {
  getBugSystemName().then((response:any) => {
    const { data } = response
    data.projectName.forEach((item:string) => {
      selectDatas.projectName.push({
        value: item,
        label: item
      })
    })
  })
}
const getBugSystem = () => {
  let params = {
    type: 1
  }
  getProjectNameList(params).then((response:any) => {
    selectDatas.projectList= response.data;
  })
}
watch(() => dialogInfo.dialogVisible, (val:boolean) => {
  if (val) {
    getProjectName()
    getBugSystem()
  }
})
const handleClose = () => {
  dialogInfo.dialogVisible = false
}
interface reqParams{
  gvsProjectNames: Array<string>,
  projectIds: Array<number>,
  type?: number
}
const emit = defineEmits(['getList'])
const confirm =()=>{
  // dialogInfo.dialogVisible = false
  let params:reqParams= {
    gvsProjectNames: [formData.gvsProjectName],
    projectIds: formData.projectIds
  }
  if (!dialogInfo.isEdit) {
    params.type = 0
  } else {
    params.type = 1
  }
  relationGvsProject(params).then((response:any) => {
    if (response.code == 200) {
      if (Number(response.code) === 404) {
        ElMessage({
          message: response.message + '，请重新输入',
          type: 'warning',
        })
        return
      }
      ElMessage({
        type: 'success',
        message: '操作成功'
      })
      emit('getList')
      dialogInfo.dialogVisible = false
    }
  })
}
defineExpose({
  formData,
  dialogInfo,
})
</script>

<style scoped lang="scss">
:deep(.el-dialog__header){
  background-color: #409eff;
  color: #fff;
  margin-right: 0;
  text-align: left;
  padding:10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
:deep(.el-dialog__headerbtn){
  width: 20px;
  height: 20px;
  position: inherit;
  .el-dialog__close{
    color: #fff;
  }
}
</style>
