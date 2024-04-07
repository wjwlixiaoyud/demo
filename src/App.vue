<template>
  <div id="app">
    <div class="cs">
      <router-link to="/Hello" class="el-icon-s-home" style="margin: 10px">
        <b>首页</b>
      </router-link>
      <router-link
        to="/farmtools"
        class="el-icon-s-promotion"
        style="margin: 10px"
      >
        <b>农具</b>
      </router-link>
      <router-link to="/my" class="el-icon-wind-power" style="margin: 10px">
        <b>历史发展</b>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import hello from "./components/hello.vue";
export default {
  name: "App",
  components: {
    hello,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  text-align: center;
  margin-top: 0;
}
.cs {
  text-align: center;
  border-radius: 15px 0px 15px 0px;
  line-height: 40px;
  background-color: burlywood;
}
.router-link-active {
  text-decoration: none;
  color: antiquewhite;
}
</style>
