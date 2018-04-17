<template>
  <div class="nuls-content">

  </div>
</template>
<script>

import {getSearchDataDetail} from "../assets/js/nuls.js";
export default {
  name: "loadSearch",
  data () {
    return {
      /*queryType: "",
      queryValue: "",*/
    }
  },
  filters: {
  },
  created:function(){
    var queryType = this.$route.query.queryType,
        queryValue = this.$route.query.queryValue,
        _self = this;
    switch(queryType){
      /*transactionHash*/
      case 1:
        _self.$router.push({path:'/transactionHash',query:{hash:queryValue}});
        break;
      /*accountInfo*/
      case 2:
        _self.$router.push({path:'/accountInfo',query:{address:queryValue}});
        break;
      /*blockDetail*/
      case 3:
        _self.$router.push({path:'/blockDetail',query:{hash:queryValue}});
        break;
      /*blockDetail*/
      case 4:
        _self.$router.push({path:'/blockDetail',query:{height:queryValue}});
        break;
      default:
        _self.$router.push({path:'/'});
        break;
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
