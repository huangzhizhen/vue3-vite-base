<template>
  <navTop />
  <div class="login-box">
    <el-row class="form-box">
      <el-col :span="5" :offset="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix from-header">
            <h2>软件平台BI系统</h2>
          </div>
          <el-form :model="loginForm" ref="loginForm">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" size="large"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" size="large"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" class="form-btn">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import navTop from './components/navTop.vue'
import { useRouter } from 'vue-router'
import { reactive} from 'vue'
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
const router = useRouter()
const login = () => {
  if (loginForm.username === 'admin' && loginForm.password === 'admin') {
    ElMessage({
      message: '登录成功',
      type: 'success',
    })
    router.push({ path: '/baseData/personManger' })
  }

}

</script>

<style scoped lang="scss">
.login-box{
  background-image: url(./../../assets/images/login/bgimg.png);
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
}
.form-box{
  // position: absolute;
  top: 30%;
  left: 45%
}
.box-card{
  padding: 30px 15px;
}
.from-header{
  margin:0px 0 30px;
}
.form-btn{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  // border-radius: 20px;
  background-color: rgb(11, 102, 248);
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
