// vite.config.ts
import { defineConfig } from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver, VueUseComponentsResolver, VueUseDirectiveResolver } from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-vue-components/dist/resolvers.js";
import legacy from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import Icons from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-icons/dist/resolver.js";
import { FileSystemIconLoader } from "file:///E:/Project-Code/2024/test/vue3-test01/node_modules/unplugin-icons/dist/loaders.js";
var __vite_injected_original_dirname = "E:\\Project-Code\\2024\\test\\vue3-test01";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    //按需自动引入配置完之后，在组件中可直接使用，不需要引用和注册
    // 但是需要注意的是，在js或者ts文件中引入element-plus的时候，需要手动引入
    AutoImport({
      // 需要去解析的文件
      include: [
        /\.[tj]sx?/,
        // .ts, .tsx, .js, .jsx,
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      //imports指定自动引入的包位置（名）
      // 若后面项目中有遇到其他依赖，可自行加进入
      imports: [
        "vue",
        "pinia",
        "vue-router",
        "@vueuse/core"
        //自动引入vueuse的api
      ],
      eslintrc: {
        //启用
        enabled: true,
        // 生成自动导入的json文件位置
        filepath: "./.eslintrc-auto-import.json",
        // 全局属性值
        globalsPropValue: true
      },
      // https://github.com/unplugin/unplugin-vue-components#importing-from-ui-libraries
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      //imports指定组件所在目录，默认为src/components
      dirs: ["src/components", "src/views"],
      //需要去解析的文件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        IconsResolver({
          // 自动引入的Icon组件统一前缀，默认为icon，设置false为不需要前缀
          prefix: "icon",
          // 当图标集名字过长时，可使用集合别名
          alias: {
            system: "system-uicons"
          },
          // 标识自定义图标集
          customCollections: ["home", "about"]
        })
      ]
    }),
    legacy(),
    // Icon 插件配置
    Icons({
      compiler: "vue3",
      // 指定编译器
      autoInstall: true,
      // 自动安装
      customCollections: {
        // user图标集，给svg文件设置fill="currentColor"属性，使图标的颜色具有适用性
        user: FileSystemIconLoader("src/assets/svg/user", (svg) => {
          return svg.replace(/^<svg /, '<svg fill="currentColor" ');
        }),
        home: FileSystemIconLoader("src/assets/svg/home", (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '))
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
      // 设置@指向src目录
    }
  },
  base: "./",
  // 设置打包路径
  server: {
    port: 4e3,
    // 设置服务启动端口号
    // open: true,// 设置服务启动时是否自动打开浏览器
    cors: true,
    // 允许跨域
    //设置代理
    proxy: {
      "/codex": {
        target: "http://192.168.151.202:7878",
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0LUNvZGVcXFxcMjAyNFxcXFx0ZXN0XFxcXHZ1ZTMtdGVzdDAxXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQcm9qZWN0LUNvZGVcXFxcMjAyNFxcXFx0ZXN0XFxcXHZ1ZTMtdGVzdDAxXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9Qcm9qZWN0LUNvZGUvMjAyNC90ZXN0L3Z1ZTMtdGVzdDAxL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIsVnVlVXNlQ29tcG9uZW50c1Jlc29sdmVyLFZ1ZVVzZURpcmVjdGl2ZVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXG4vLyBpY29uIFx1NjNEMlx1NEVGNlxuaW1wb3J0IEljb25zIGZyb20gXCJ1bnBsdWdpbi1pY29ucy92aXRlXCJcbi8vIGljb24gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XHU4OUUzXHU2NzkwXHU1NjY4XG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZXJcIlxuLy8gaWNvbiBcdTUyQTBcdThGN0QgbG9hZGVyXG5pbXBvcnQgeyBGaWxlU3lzdGVtSWNvbkxvYWRlciB9IGZyb20gXCJ1bnBsdWdpbi1pY29ucy9sb2FkZXJzXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICAvL1x1NjMwOVx1OTcwMFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1OTE0RFx1N0Y2RVx1NUI4Q1x1NEU0Qlx1NTQwRVx1RkYwQ1x1NTcyOFx1N0VDNFx1NEVGNlx1NEUyRFx1NTNFRlx1NzZGNFx1NjNBNVx1NEY3Rlx1NzUyOFx1RkYwQ1x1NEUwRFx1OTcwMFx1ODk4MVx1NUYxNVx1NzUyOFx1NTQ4Q1x1NkNFOFx1NTE4Q1xuICAgIC8vIFx1NEY0Nlx1NjYyRlx1OTcwMFx1ODk4MVx1NkNFOFx1NjEwRlx1NzY4NFx1NjYyRlx1RkYwQ1x1NTcyOGpzXHU2MjE2XHU4MDA1dHNcdTY1ODdcdTRFRjZcdTRFMkRcdTVGMTVcdTUxNjVlbGVtZW50LXBsdXNcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTk3MDBcdTg5ODFcdTYyNEJcdTUyQThcdTVGMTVcdTUxNjVcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIC8vIFx1OTcwMFx1ODk4MVx1NTNCQlx1ODlFM1x1Njc5MFx1NzY4NFx1NjU4N1x1NEVGNlxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4Py8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4LFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLC8vIC52dWVcbiAgICAgICAgL1xcLm1kJC8gLy8gLm1kXG4gICAgICBdLFxuICAgICAgLy9pbXBvcnRzXHU2MzA3XHU1QjlBXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XHU3Njg0XHU1MzA1XHU0RjREXHU3RjZFXHVGRjA4XHU1NDBEXHVGRjA5XG4gICAgICAvLyBcdTgyRTVcdTU0MEVcdTk3NjJcdTk4NzlcdTc2RUVcdTRFMkRcdTY3MDlcdTkwNDdcdTUyMzBcdTUxNzZcdTRFRDZcdTRGOURcdThENTZcdUZGMENcdTUzRUZcdTgxRUFcdTg4NENcdTUyQTBcdThGREJcdTUxNjVcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICdwaW5pYScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScvL1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NXZ1ZXVzZVx1NzY4NGFwaVxuICAgICAgXSxcbiAgICAgIGVzbGludHJjOiB7XG4gICAgICAgIC8vXHU1NDJGXHU3NTI4XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIC8vIFx1NzUxRlx1NjIxMFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NzY4NGpzb25cdTY1ODdcdTRFRjZcdTRGNERcdTdGNkVcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJyxcbiAgICAgICAgLy8gXHU1MTY4XHU1QzQwXHU1QzVFXHU2MDI3XHU1MDNDXG4gICAgICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5wbHVnaW4vdW5wbHVnaW4tdnVlLWNvbXBvbmVudHMjaW1wb3J0aW5nLWZyb20tdWktbGlicmFyaWVzXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvL2ltcG9ydHNcdTYzMDdcdTVCOUFcdTdFQzRcdTRFRjZcdTYyNDBcdTU3MjhcdTc2RUVcdTVGNTVcdUZGMENcdTlFRDhcdThCQTRcdTRFM0FzcmMvY29tcG9uZW50c1xuICAgICAgZGlyczogWydzcmMvY29tcG9uZW50cycsICdzcmMvdmlld3MnXSxcbiAgICAgIC8vXHU5NzAwXHU4OTgxXHU1M0JCXHU4OUUzXHU2NzkwXHU3Njg0XHU2NTg3XHU0RUY2XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICBWdWVVc2VDb21wb25lbnRzUmVzb2x2ZXIoKSxcbiAgICAgICAgVnVlVXNlRGlyZWN0aXZlUmVzb2x2ZXIoKSxcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XHU3Njg0SWNvblx1N0VDNFx1NEVGNlx1N0VERlx1NEUwMFx1NTI0RFx1N0YwMFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQWljb25cdUZGMENcdThCQkVcdTdGNkVmYWxzZVx1NEUzQVx1NEUwRFx1OTcwMFx1ODk4MVx1NTI0RFx1N0YwMFxuICAgICAgICAgIHByZWZpeDogJ2ljb24nLFxuICAgICAgICAgIC8vIFx1NUY1M1x1NTZGRVx1NjgwN1x1OTZDNlx1NTQwRFx1NUI1N1x1OEZDN1x1OTU3Rlx1NjVGNlx1RkYwQ1x1NTNFRlx1NEY3Rlx1NzUyOFx1OTZDNlx1NTQwOFx1NTIyQlx1NTQwRFxuICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBzeXN0ZW06ICdzeXN0ZW0tdWljb25zJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gXHU2ODA3XHU4QkM2XHU4MUVBXHU1QjlBXHU0RTQ5XHU1NkZFXHU2ODA3XHU5NkM2XG4gICAgICAgICAgY3VzdG9tQ29sbGVjdGlvbnM6IFsnaG9tZScsICdhYm91dCddXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfSksXG4gICAgbGVnYWN5KCksXG4gICAgLy8gSWNvbiBcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcbiAgICBJY29ucyh7XG4gICAgICBjb21waWxlcjogJ3Z1ZTMnLC8vIFx1NjMwN1x1NUI5QVx1N0YxNlx1OEJEMVx1NTY2OFxuICAgICAgYXV0b0luc3RhbGw6IHRydWUsLy8gXHU4MUVBXHU1MkE4XHU1Qjg5XHU4OEM1XG4gICAgICBjdXN0b21Db2xsZWN0aW9uczoge1xuICAgICAgICAvLyB1c2VyXHU1NkZFXHU2ODA3XHU5NkM2XHVGRjBDXHU3RUQ5c3ZnXHU2NTg3XHU0RUY2XHU4QkJFXHU3RjZFZmlsbD1cImN1cnJlbnRDb2xvclwiXHU1QzVFXHU2MDI3XHVGRjBDXHU0RjdGXHU1NkZFXHU2ODA3XHU3Njg0XHU5ODlDXHU4MjcyXHU1MTc3XHU2NzA5XHU5MDAyXHU3NTI4XHU2MDI3XG4gICAgICAgIHVzZXI6RmlsZVN5c3RlbUljb25Mb2FkZXIoXCJzcmMvYXNzZXRzL3N2Zy91c2VyXCIsKHN2Zyk9PntcbiAgICAgICAgICAgIHJldHVybiBzdmcucmVwbGFjZSgvXjxzdmcgLywgJzxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiICcpXG4gICAgICAgIH0pLFxuICAgICAgICBob21lOiBGaWxlU3lzdGVtSWNvbkxvYWRlcignc3JjL2Fzc2V0cy9zdmcvaG9tZScsIHN2ZyA9PiBzdmcucmVwbGFjZSgvXjxzdmcgLywgJzxzdmcgZmlsbD1cImN1cnJlbnRDb2xvclwiICcpKSxcbiAgICAgIH0sXG5cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsJ3NyYycpLy8gXHU4QkJFXHU3RjZFQFx1NjMwN1x1NTQxMXNyY1x1NzZFRVx1NUY1NVxuICAgIH1cbiAgfSxcbiAgYmFzZTogJy4vJywvLyBcdThCQkVcdTdGNkVcdTYyNTNcdTUzMDVcdThERUZcdTVGODRcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNDAwMCwvLyBcdThCQkVcdTdGNkVcdTY3MERcdTUyQTFcdTU0MkZcdTUyQThcdTdBRUZcdTUzRTNcdTUzRjdcbiAgICAvLyBvcGVuOiB0cnVlLC8vIFx1OEJCRVx1N0Y2RVx1NjcwRFx1NTJBMVx1NTQyRlx1NTJBOFx1NjVGNlx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgIGNvcnM6IHRydWUsLy8gXHU1MTQxXHU4QkI4XHU4REU4XHU1N0RGXG4gICAgLy9cdThCQkVcdTdGNkVcdTRFRTNcdTc0MDZcbiAgICBwcm94eToge1xuICAgICAgJy9jb2RleCc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzE5Mi4xNjguMTUxLjIwMjo3ODc4JyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsU0FBUyxvQkFBb0I7QUFDeFUsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHFCQUFvQiwwQkFBeUIsK0JBQStCO0FBQ3JGLE9BQU8sWUFBWTtBQUVuQixPQUFPLFdBQVc7QUFFbEIsT0FBTyxtQkFBbUI7QUFFMUIsU0FBUyw0QkFBNEI7QUFackMsSUFBTSxtQ0FBbUM7QUFlekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBO0FBQUE7QUFBQSxJQUdKLFdBQVc7QUFBQTtBQUFBLE1BRVQsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBLE1BR0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQTtBQUFBLFFBRVIsU0FBUztBQUFBO0FBQUEsUUFFVCxVQUFVO0FBQUE7QUFBQSxRQUVWLGtCQUFrQjtBQUFBLE1BQ3BCO0FBQUE7QUFBQSxNQUVBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQTtBQUFBLE1BRVQsTUFBTSxDQUFDLGtCQUFrQixXQUFXO0FBQUE7QUFBQSxNQUVwQyxTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUV6QyxXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxRQUNwQix5QkFBeUI7QUFBQSxRQUN6Qix3QkFBd0I7QUFBQSxRQUN4QixjQUFjO0FBQUE7QUFBQSxVQUVaLFFBQVE7QUFBQTtBQUFBLFVBRVIsT0FBTztBQUFBLFlBQ0wsUUFBUTtBQUFBLFVBQ1Y7QUFBQTtBQUFBLFVBRUEsbUJBQW1CLENBQUMsUUFBUSxPQUFPO0FBQUEsUUFDckMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQTtBQUFBLElBRVAsTUFBTTtBQUFBLE1BQ0osVUFBVTtBQUFBO0FBQUEsTUFDVixhQUFhO0FBQUE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBO0FBQUEsUUFFakIsTUFBSyxxQkFBcUIsdUJBQXNCLENBQUMsUUFBTTtBQUNuRCxpQkFBTyxJQUFJLFFBQVEsVUFBVSwyQkFBMkI7QUFBQSxRQUM1RCxDQUFDO0FBQUEsUUFDRCxNQUFNLHFCQUFxQix1QkFBdUIsU0FBTyxJQUFJLFFBQVEsVUFBVSwyQkFBMkIsQ0FBQztBQUFBLE1BQzdHO0FBQUEsSUFFRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFVLEtBQUs7QUFBQTtBQUFBLElBQzlCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
