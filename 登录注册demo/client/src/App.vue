<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>注册登录小DEMO</h1>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center
  }
</style>