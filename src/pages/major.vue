<template>
  <div class="nuls-warper">
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
