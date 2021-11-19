<template>
  <div id="app">
    <NavBar />
    <home />
  </div>
</template>

<script>
import home from "@/pages/Home.vue";
import NavBar from "@/components/Menu/NavBar.vue";
export default {
  name: "App",
  components: {
    home,
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@import "~@/assets/reset.css";
</style>
