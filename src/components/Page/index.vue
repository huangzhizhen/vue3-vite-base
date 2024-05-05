<template>
  <div class="pagination-box">
    <el-pagination
    background
    layout="total, sizes, prev, pager, next, jumper"
    :current-page="currentPage"
    :page-size="currentPageSize"
    :total="total"
    :page-sizes="pageSizes"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    />
  </div>
</template>


<script setup lang="ts">
// 定义prop接受父组件传递的值
import { defineProps,defineEmits } from 'vue';
// defineProps<{
//   pageSizes?: {
//     type: number[],
//     default: [10, 20, 50, 100]
//   },
//   currentPageSize?:{
//     type: number,
//     default: 10
//   },
//   total?: {
//     type: number,
//     default: 1000
//   },
//   currentPage?:{
//     type: number,
//     default: 1
//   },
//   showSizer?: {
//     type: Boolean,
//     default: true
//   },
//   showTotal?: {
//     type: Boolean,
//     default: true
//   },
//   showJumper?: {
//     type: Boolean,
//     default: true
//   },
// }>()

// 定义prop接受父组件传递的值
defineProps<{
  pageSizes?: number[],
  currentPageSize?: number,
  total?: number,
  currentPage?: number,
  showSizer?: boolean,
  showTotal?: boolean,
  showJumper?: boolean
}>()

const handleSizeChange = (val: number) => {
  // 触发emit事件，将当前页码和每页显示条数传递给父组件
  onPageSizeChange(val)
};
const handleCurrentChange = (val: number) => {
  onChange(val)
};

const emit = defineEmits([ "onPageSizeChange",'onChange' ]);
const onPageSizeChange = (val:number) => {
  //子组件用emit向父组件触发一个事件
  emit('onPageSizeChange',val);
}
const onChange = (val:number) => {
  //子组件用emit向父组件触发一个事件
  emit('onChange',val);
}
</script>
<style scoped lang="scss">

</style>
