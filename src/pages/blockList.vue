<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("blockList.blockList")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="nuls-title">
      {{$t("blockList.blockList")}}
    </div>
    <div>
      <ul class="nuls-ul-table">
        <li class="head">
          <span>
            <ul class="nuls-ul-sub-table">
              <li>
                <span>{{$t("blockList.height")}}</span>
                <span>{{$t("blockList.time")}}</span>
                <span>{{$t("blockList.transactionCount")}}</span>
                <span>{{$t("blockList.blockNodeName")}}</span>
                <span>{{$t("blockList.size")}}(byte)</span>
                <span>{{$t("blockList.blockReward")}}</span>
              </li>
            </ul>
          </span>
        </li>
        <li class="content">
          <span>
            <ul class="nuls-ul-sub-table">
              <li v-for="block in blockList">
                <span><router-link :to="{path:'/blockDetail',query:{height:block.height}}">{{block.height}}</router-link></span>
                <span>{{block.time | formatDate}}</span>
                <span>{{block.txCount}}</span>
                <span>
                  <router-link :to="{path:'/consensusNode',query:{address:block.packingAddress,type:2}}">{{block.packingAddress | formatString}}</router-link>
                </span>
                <span>{{block.size}}</span>
                <span>{{block.reward|getInfactCoin}} NULS</span>
              </li>
            </ul>
          </span>
        </li>
        <li class="foot">
          <span>
          <el-pagination
            background
            :prev-text="$t('page.previous')"
            :next-text="$t('page.next')"
            layout="total,prev, pager, next,jumper"
            @current-change="nulsGetBlockList"
            :page-size=this.pageSize
            :total=this.totalDataNumber>
          </el-pagination>
          </span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import {getBlockList} from "../assets/js/nuls.js";
  import {formatDate,formatString,getInfactCoin} from '../assets/js/util.js';
  export default {
    name: "blockList",
    data () {
      return {
        blockList: [{height:0,time:'2018-01-01 00:00:00',packingAddress:'xxxxxx',txCount:0,reward:0,size:0}],
        totalDataNumber: 0,
        pageSize: 20
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      },
      formatString(str){
        return formatString(str);
      },
      getInfactCoin(count) {
        return getInfactCoin(count);
      }
    },
    created:function(){
      this.nulsGetBlockList();
    },
    methods: {
      nulsGetBlockList(pageNumber){
        var _self = this;
        getBlockList({"pageNumber":pageNumber,"pageSize":_self.pageSize},function(res){
          if(res.success){
            if(res.data.list){
              _self.blockList = res.data.list;
              _self.totalDataNumber = res.data.total;
            }else{
              _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.noMessage"),type: 'warning'});
            }
          }else{
            _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
          }
        })
      }
    }
  }
</script>

<style>
</style>
