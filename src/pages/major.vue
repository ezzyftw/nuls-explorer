<template>
  <div>
    <Head/>
    <router-view></router-view>
    <Foot/>
  </div>
</template>


<script>

  import Head from "../components/Head";
  import Foot from "../components/Foot";

  export default {
    name: "major",
    components: {Foot, Head}
  }
</script>

<style scoped>

</style>
