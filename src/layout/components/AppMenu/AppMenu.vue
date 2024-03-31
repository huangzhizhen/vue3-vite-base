<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :collapse="isCollapse"
    :collapse-transition="false"
    :default-openeds="openeds"
    active-text-color="#1890ff"
    :default-active="activeIndex"
    :unique-opened="true"
    @select="handleSelect"
    router>
    <template v-for="(item,index) in filteredRoutes" :key="index">
      <router-link :to="item.path" v-if="!item.children">
        <el-menu-item :index="item.path">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <svg-icon iconName="icon-renyuan"></svg-icon>
	        <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>

      <el-sub-menu :index="item.path" v-else>
        <!-- 一级标题 -->
        <template #title>
          <el-icon v-if="item.meta.iconType==1">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <svg-icon iconName="icon-renyuan" v-else></svg-icon>
          <span>{{ item.meta.title }}</span>
          </template>
        <template v-for="(item1) in item.children" :key="item1.path">
          <router-link :to="item.path+'/'+item1.path">
            <el-menu-item :index="item.path+'/'+item1.path">
              <el-icon v-if="item1.meta.iconType==1">
                <component :is="item1.meta.icon"></component>
              </el-icon>
              <svg-icon :iconName="item1.meta.icon" v-else ></svg-icon>
              <span>{{ item1.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref,watch,onMounted,computed } from 'vue';
  import { useAppLayoutStore } from '@/store/modules/appLayout'

  const appLayoutStore = useAppLayoutStore()
  const isCollapse = computed(() => appLayoutStore.isCollapse);
  const router = useRouter()
  const filteredRoutes = router.options.routes.filter(route => {
    return !route.meta || !route.meta.hidden;
  });
  const openeds = ref([''])
  watch(() => router.currentRoute.value, (route) => {
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
  background-color: #304156;
  h3 {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
