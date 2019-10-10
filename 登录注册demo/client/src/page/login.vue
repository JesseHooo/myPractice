<template>
  <div class="login_container">
    <el-form :label-position="labelPosition" label-width="40px" :model="formData">
      <el-form-item label="账号">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" style="margin-left: 60px">登录</el-button>
      <el-button @click="clear">取消</el-button>
      <span style="margin-left: 10px">{{msg}}</span>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        labelPosition: 'right',
        formData: {
          account: '',
          password: ''
        },
        msg: ''
      }
    },
    methods: {
      clear() {
        this.formData = {
          account: '',
          password: ''
        },
        this.msg = ''
      },
      onSubmit() {
        this.$axios.get('http://192.168.124.7:3000/login', {
          params: this.formData
        }, {
          headers: {
            'Conten-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          if (res.data.err_code == 1) {
            this.msg = res.data.message;
            return;
          } else if (res.data.err_code == 0) {
            this.msg = res.data.message;
            //更新vuex状态
            this.$store.commit("user_login",res.data.accountInfo);
            console.log(res.data.accountInfo);
            //保存至sessionStorage
            let json_data = JSON.stringify(res.data.accountInfo);
            sessionStorage.setItem("accountInfo", json_data);
            setTimeout(() => {
              this.$emit('hasLogined', res.data.accountInfo);
              this.clear();
            }, 2000);
          }
        }).catch(err => {
          console.log("未收到响应", err)
        })
      }
    }
  }
</script>

<style scoped>
  .login_container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center
  }

  .el-form {
    width: 350px;
    height: 200px;
    padding: 50px;
  }
</style>