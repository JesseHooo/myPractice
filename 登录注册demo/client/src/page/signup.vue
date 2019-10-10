<template>
  <div class="signup_container">
    <el-form :label-position="labelPosition" label-width="40px" :model="formData">
      <el-form-item label="账号">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit" style="margin-left: 60px">注册</el-button>
      <el-button @click="clear">取消</el-button>
      <span style="margin-left: 10px">{{msg}}</span>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'Signup',
    data() {
      return {
        msg: '等待注册..',
        labelPosition: 'right',
        formData: {
          account: '',
          password: '',
          name: ''
        }
      }
    },
    methods: {
      clear() {
        this.formData = {
          account: '',
          password: '',
          name: ''
        };
        this.msg = '等待注册..'
      },
      onSubmit() {
        let data = new FormData();
        data.append('account', this.formData.account);
        data.append('password', this.formData.password);
        data.append('name', this.formData.name);
        console.log(data)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
            // "Content-Type":"application/x-www-form-urlencoded"
          }
        }
        this.$axios.post('http://192.168.124.7:3000/sign_up', data, config).
          then(res => {
            if (res.data.err_code == 1) {
              console.log(res.data.message)
              this.msg = res.data.message;
              return;
            } else if (res.data.err_code == 0) {
              console.log(res.data.message)
              this.msg = res.data.message;
              setTimeout(() => {
                this.clear();
                this.$emit('signUpFin')
              }, 2000);
              return;
            }
          }).catch(err => {
            console.log('请求失败', err);
          })
      }
    },
    created() {
      // console.log('页面重新加载')
    }
  }
</script>

<style scoped>
  .signup_container{
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