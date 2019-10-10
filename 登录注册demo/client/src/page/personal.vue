<template>
  <div>
    <h4>这是你个人信息:</h4>
    <p v-for="(item,i) in msg"><b>{{i}}:</b>{{item}}</p>
    <el-button type="info" @click="toMain" round>返回首页</el-button>
  </div>
</template>
<script>
  export default {
    name: 'Personal',
    data() {
      return {
      }
    },
    methods: {
      toMain() {
        this.$router.push('/main');
      }
    },
    computed: {
      msg() {
        return this.$store.state.accountInfo
        console.log(this.$store.state.accountInfo);
      }
    }
  }
</script>

<style>

</style>