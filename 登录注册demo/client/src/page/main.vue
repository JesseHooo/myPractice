<template>
  <div class="mian">
    <h4>前端vue-router+vuex+axios / 后端express框架+mongoDB数据库</h4>
    <div>
      <el-button type="primary" @click="toPersonal" round>
        进入个人主页
      </el-button>
      <span v-show="!hasLogined">/</span>
      <el-button type="info" @click="toggle" round v-show="!hasLogined">
        {{hasSigned?'点击注册':'返回登录'}}
      </el-button>
    </div>
    <login v-show="hasSigned&&!hasLogined" @hasLogined="Logined"></login>
    <signup v-show="!hasSigned" @signUpFin='toLogin'></signup>
    <div v-show="hasLogined">
      <p>你好~亲爱的 <b>{{accountName}}</b> 欢迎你回来，我们一直都在~</p>
      <el-button class="logout_btn" type="info" round @click="logout">退出登录</el-button>
    </div>
  </div>
</template>
<script>
  import Login from './login'
  import Signup from './signup'

  export default {
    name: 'Main',
    components: {
      Login,
      Signup
    },
    data() {
      return {
        hasSigned: true,
        hasLogined: false,
        accountInfo: null,
        accountName: ''
      }
    },
    methods: {
      toLogin() {
        this.hasSigned = true;
      },
      toggle() {
        this.hasSigned = !this.hasSigned;
      },
      toPersonal() {
        if (this.hasLogined) {
          this.$router.push({
            path: '/personal',
            params: {
              msg: this.accountInfo
            }
          });
          return;
        }
        alert("请登录账号~")
      },
      Logined(data) {
        this.hasLogined = true,
          this.accountInfo = data,
          this.accountName = data.name
      },
      logout() {
        this.hasSigned = true;
        this.hasLogined = false;
        this.accountInfo = null;
        this.accountName = '';
        this.$store.commit("user_logout")
      }
    }
  }
</script>

<style>
  .mian {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center
  }

  a {
    text-decoration: none;
    color: aliceblue;
  }

  .logout_btn {
    width: 30%;
    min-width:100px;
    margin: 0 35%;
  }
</style>