import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver,VueUseComponentsResolver,VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'
// icon 插件
import Icons from "unplugin-icons/vite"
// icon 自动引入解析器
import IconsResolver from "unplugin-icons/resolver"
// icon 加载 loader
import { FileSystemIconLoader } from "unplugin-icons/loaders"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //按需自动引入配置完之后，在组件中可直接使用，不需要引用和注册
    // 但是需要注意的是，在js或者ts文件中引入element-plus的时候，需要手动引入
    AutoImport({
      //imports指定自动引入的包位置（名）
      // 若后面项目中有遇到其他依赖，可自行加进入
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core'//自动引入vueuse的api
      ],
      // https://github.com/unplugin/unplugin-vue-components#importing-from-ui-libraries
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        })
      ],
      eslintrc: {
        //启用
        enabled: true,
        // 生成自动导入的json文件位置
        filepath: './.eslintrc-auto-import.json',
        // 全局属性值
        globalsPropValue: true
      }
    }),
    Components({
      //imports指定组件所在目录，默认为src/components
      dirs: ['src/components', 'src/views'],
      //需要去解析的文件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconsResolver({
          // 自动引入的Icon组件统一前缀，默认为icon，设置false为不需要前缀
          prefix: 'icon',
          // 当图标集名字过长时，可使用集合别名
          alias: {
            system: 'system-uicons'
          },
          // enabledCollections: ['ep'],//自动注册图标组件，ep其实就是element-plus的缩写
          // 标识自定义图标集
          customCollections: ['home', 'menu'],
        })
      ]
    }),
    legacy(),
    // Icon 插件配置
    Icons({
      compiler: 'vue3',// 指定编译器
      autoInstall: true,// 自动安装
      // 自定义图标加载
      customCollections: {
        // user图标集，给svg文件设置fill="currentColor"属性，使图标的颜色具有适用性
        menu:FileSystemIconLoader("src/assets/svg/menu",(svg)=>{
            // return svg.replace(/^<svg /, '<svg')
            return svg
        }),
        home: FileSystemIconLoader('src/assets/svg/home', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },

    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')// 设置@指向src目录
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],// 设置文件查找后缀
  },
  base: './',// 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 4000,// 设置服务启动端口号
    // open: true,// 设置服务启动时是否自动打开浏览器
    cors: true,// 允许跨域
    //设置代理
    proxy: {
      '/codex': {
        target: 'http://code.gvssmart.top',
        changeOrigin: true,
      }
    }
  },
})
