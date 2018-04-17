<template>
<header class="head">
<div class="nuls-head-content clearfix">
<div class="nuls-logo-content clearfix">
<router-link to="/"></router-link>
</div>
<ul class="nuls-navigation-box clearfix">
<li>
<router-link to="/">{{$t("nav.index")}}</router-link>
</li>
<li>
  <span>
  <router-link to="">{{$t("nav.rank")}}</router-link>
  <i class="el-icon-arrow-down"></i>
  </span>
  <ul class="nuls-dropdown-list">
    <li>
    <router-link to="/cashAccount">{{$t("nav.currencyAccount")}}</router-link>
    </li>
    <li>
    <router-link to="/pieceOfAccount">{{$t("nav.outPieceAccount")}}</router-link>
    </li>
  </ul>
</li>
<li>
<router-link to="">{{$t("nav.tool")}}</router-link>
</li>
<li>
  <span>
  <router-link to="" class="nuls-dropdown">{{$t("nav.wallet")}}</router-link>
  <i class="el-icon-arrow-down"></i>
  </span>
  <ul class="nuls-dropdown-list">
    <li>
    <router-link to="">{{$t("nav.clientDownloads")}}</router-link>
    </li>
    <li>
    <router-link to="">{{$t("nav.webWallet")}}</router-link>
    </li>
  </ul>
</li>
</ul>
<div class="nuls-language-box">
<select @change="change($event)">
<option value="zh">中文</option>
<option value="en">English</option>
</select>
</div>
<div class="nuls-search-box">
<input placeholder="Address / Txhash / Block" class="pointer" ref="search" @keyup.enter="search" value="" type="text"/>
<i class="el-icon-search pointer" @click="search"></i>
</div>

</div>
</header>
</template>

<script>
import {getSearchDataDetail} from "../assets/js/nuls.js";

export default {
  name: "Head",
  data() {
    return {
    }
  },
  methods: {
    change: function(event){
      this.$i18n.locale = event.target.value;
    },
    search: function () {
      /*show loading*/
      var loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }),
      _self = this,
      serchVal = _self.$refs.search.value;
      if(serchVal && serchVal.length>0){
        /*change the 'serchVal' is Available*/
        getSearchDataDetail({key:serchVal},function (res) {
          if(res.success){
            _self.$router.push({path:'/loadSearch',query:{queryType:res.type,queryValue:serchVal}});
          }else{
            _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.searchFailed"),type: 'warning'});
          }
          /*hide the loader after the request finish*/
          loading.close();
        });
      }else{
        _self.$alert(_self.$t("notice.searchNull"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
      }
      /*clear the search box*/
      _self.$refs.search.value="";
    },
  }
}
</script>

<style>

</style>
