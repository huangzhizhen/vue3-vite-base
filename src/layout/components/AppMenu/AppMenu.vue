<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#fff"
    text-color="#666"
    :collapse="isCollapse"
    :collapse-transition="false"
    :default-openeds="openeds"
    active-text-color="#1890ff"
    :default-active="activeIndex"
    :unique-opened="true"
    @select="handleSelect"
    router>
    <template v-for="(item) in filteredRoutes" :key="item.path">
      <el-sub-menu :index="item.path" v-if="item.children?.length > 1">
        <!-- 标题 -->
        <template #title>
          <Item :icon="item.meta.icon" :title="item.meta.title" :isElMenuItem="false"/>
        </template>
        <!-- 二级菜单 -->
        <template v-for="(item1) in item.children" :key="item1.path">
          <router-link :to="item.path+'/'+item1.path">
            <Item :icon="item1.meta.icon" :title="item1.meta.title" :path="item.path+'/'+item1.path" :isElMenuItem="true"/>
          </router-link>
        </template>
      </el-sub-menu>
      <!-- 当children<=1得时候，直接循环二级菜单 -->
      <template v-else>
        <Item :icon="subItem.meta.icon" :title="subItem.meta.title" :path="item.path+'/'+subItem.path" :isElMenuItem="true"  v-for="subItem in item.children" :key="subItem.meta.path"/>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
  import Item from './item.vue'
  import { useRouter} from 'vue-router';
  import { ref,watch,computed } from 'vue';
  import { useAppLayoutStore } from '@/store/modules/appLayout'
  const appLayoutStore = useAppLayoutStore()
  const isCollapse = computed(() => appLayoutStore.isCollapse);
  const router = useRouter()
  const filteredRoutes= router.options.routes.filter((route: any) => {
    return !route.meta || !route.meta.hidden;
  }) as any[]
  const openeds = ref([''])
  watch(() => router.currentRoute.value, (route:any) => {
    if(route.matched.length > 1) {
      const parentPath:string = route.matched[1].path
      openeds.value = [ parentPath ]
    } else {
      openeds.value = []
    }
  }
  )
  // 菜单激活的路由
  const activeIndex = computed(() => appLayoutStore.activeIndex)
  const handleSelect = (index:string) => {
    appLayoutStore.setActiveIndex(index)
  }
</script>

<style lang="scss" scoped>
.icons {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
.el-menu-vertical-demo {
  width: 100%;
  border-right: none;
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
.el-menu-item.is-active{
  .icons{
    filter:brightness(1.2) saturate(-1.5)!important;
  }
}
</style>
