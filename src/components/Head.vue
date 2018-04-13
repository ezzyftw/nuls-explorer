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
          <span @mouseenter="dropdwon" @mouseleave="dropdwon">
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
        <span @mouseenter="dropdwon" @mouseleave="dropdwon">
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
import {getTop, getLeft} from "../assets/js/common.js";
import {getSearchDataDetail} from "../assets/js/nuls.js";
import {brotherComponents} from '../assets/js/public.js';
var isInDropDown = false;
function dropdownLeaveEvent(e) {
  isInDropDown = true;
}

function dropdownOutEvent(e) {
  isInDropDown = false;
  var currentElement = e.currentTarget;
  if (currentElement.style.display === '' || currentElement.style.display === 'block') {
    currentElement.style.display = 'none';
  }
}

export default {
  name: "Head",
  data() {return {};},
  methods: {
    change: function(event){
      this.$i18n.locale = event.target.value;
    },
    search: function () {
      var loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }),
      _self = this,
      serchVal = _self.$refs.search.value;
      if(serchVal && serchVal.length>0){
        getSearchDataDetail({key:serchVal},function (res) {
          if(res.success){
            var showType = res.type,currentPath=_self.$route.path;
            if(showType==1){
              if(currentPath=="/accountInfo"){
                brotherComponents.$emit('searchTransactionByHash',serchVal);
              }else{
                _self.$router.push({path:'/transactionHash',query:{hash:serchVal}});
              }
            }else if(showType==2){
              if(currentPath=="/accountInfo"){
                brotherComponents.$emit('searchAccountByAddress',serchVal);
              }else{
                _self.$router.push({path:'/accountInfo',query:{address:serchVal}});
              }
            }else if(showType==3){
              if(currentPath=="/blockDetail"){
                brotherComponents.$emit('searchBlockByHash',serchVal);
              }else{
                _self.$router.push({path:'/blockDetail',query:{hash:serchVal}});
              }
            }else if(showType==4){
              if(currentPath=="/blockDetail"){
                brotherComponents.$emit('searchBlockByHeight',serchVal);
              }else{
                _self.$router.push({path:'/blockDetail',query:{height:serchVal}});
              }
            }else{
              _self.$notify({title: '提示',message: '没有搜索到任何信息',type: 'warning'});
            }
          }else{
            _self.$notify({title: '提示',message: '没有搜索到任何信息',type: 'warning'});
          }
        })
      }else{
        _self.$notify({title: '提示',message: '请先输入搜索内容',type: 'warning'});
      }
      loading.close();
      setTimeout(function(){_self.$refs.search.value=""},2000);
    },
    dropdwon: function (e) {
      let currentElement = e.currentTarget;
      let dropdownBox = currentElement.nextElementSibling;

      if (dropdownBox.className.indexOf("nuls-dropdown-list") === -1) {
        return;
      }

      //let dropdownBox = document.querySelector(".nuls-dropdown-list");

      function extracted() {
        dropdownBox.removeEventListener("mouseleave", dropdownOutEvent);
        dropdownBox.addEventListener("mouseleave", dropdownOutEvent);

        dropdownBox.removeEventListener("mouseover", dropdownLeaveEvent);
        dropdownBox.addEventListener("mouseover", dropdownLeaveEvent);

        if (!!dropdownBox) {
          var style = window.getComputedStyle(dropdownBox);
          if (style.display === '' || style.display === 'block') {
            setTimeout(function () {
              if (!isInDropDown) {
                dropdownBox.style.display = 'none';
              }
            }, 300);
          } else {
            let absoluteTop = getTop(currentElement);
            let absoluteLeft = getLeft(currentElement);
            let height = currentElement.offsetHeight;
            let width = currentElement.offsetWidth;
            dropdownBox.style.top = (absoluteTop + height - 10) + "px";
            dropdownBox.style.left = (absoluteLeft + width / 2) + "px";
            dropdownBox.style.marginTop = 3 + "px";
            dropdownBox.style.marginLeft = (-100 / 2) + "px";
            dropdownBox.style.display = 'block';
          }
        }
      }
      extracted();
    }
  }
}
</script>

<style>

</style>
