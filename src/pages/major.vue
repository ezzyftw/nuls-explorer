<template>
    <!--Main start-->
    <div class="nuls_parent_content">
      <div class="nuls_child_content">
        <div class="nuls-warper">
        <Head/>
        <router-view></router-view>
        <Foot/>
        </div>
      </div>
    </div>
    <!--Main end-->
</template>
<script>
  import Head from "../components/Head";
  import Foot from "../components/Foot";
  export default {
    name: "major",
    data() {return {};},
    components: {Foot, Head}
  }
</script>
