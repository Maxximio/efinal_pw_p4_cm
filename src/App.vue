<template>

<Main></Main>


</template>

<script>
import Main from '../src/modules/pokemon/pages/Main.vue'

export default {
  name: "App",
  components: {
    Main
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

</style>
