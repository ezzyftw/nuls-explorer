<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("consensusNode.consensusNode")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      {{$t("consensusNode.consensusNode")}}
    </div>
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">{{$t("consensusNode.accountInfo")}}</span><a href="/accountInfo" class="float_right">{{consensusDetail.packingAddress}}</a></li>
      <li><span class="float_left">{{$t("consensusNode.blockAddress")}}</span><span  class="float_right">{{consensusDetail.agentAddress}}</span></li>
      <li><span class="float_left">{{$t("consensusNode.nodeName")}}</span><span  class="float_right">{{consensusDetail.agentName}}</span></li>
      <li><span class="float_left">{{$t("consensusNode.consensusStatus")}}</span><span class="float_right">{{consensusDetail.status|formatConsensusStatus}}</span></li>
      <li><span class="float_left">{{$t("consensusNode.blockCount")}}</span><span class="float_right">{{consensusDetail.packedCount}} blocks</span></li>
      <li><span class="float_left">{{$t("consensusNode.transactionCount")}}</span><span class="float_right">{{consensusDetail.creditRatio}} txns</span></li>
      <li><span class="float_left">{{$t("consensusNode.margin")}}</span><span class="float_right">{{consensusDetail.owndeposit|getInfactCoin}} NULS</span></li>
    </ul>
    <div style="height:40px;"></div>
    <ul class="nuls-ul-table">
      <li class="head">
        <span>
          <ul class="nuls-ul-sub-table">
            <li>
              <span>{{$t("blockList.height")}}</span>
              <span>{{$t("blockList.time")}}</span>
              <span>{{$t("blockList.transactionCount")}}</span>
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
              <span><router-link to="/consensusNode">{{block.packingAddress | formatString}}</router-link></span>
              <span>{{block.size}}</span>
              <span>{{block.reward}} NULS</span>
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
</template>
<script>
import {getBlockListAddressAll,getConsensusAgentDetail} from "../assets/js/nuls.js";
import {formatDate,formatString,formatConsensusStatus,getInfactCoin} from '../assets/js/util.js';
export default {
  name: "blockDetail",
  data () {
    return {
      consensusDetail: {agentId:'',agentAddress:'',agentName:'',status:'',packingAddress:'',packedCount:'',totalDeposit:'',owndeposit:''},
      blockList: [{height:0,time:'',packingAddress:'',txCount:0,reward:0,size:0}],
      totalDataNumber: 0,
      pageSize: 20,
      address: '',
      type: 1
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
    formatString(str){
      return formatString(str);
    },
    formatConsensusStatus(status){
      return formatConsensusStatus(status);
    },
    getInfactCoin(count){
      return getInfactCoin(count);
    }
  },
  created:function(){
    this.address = this.$route.query.address;
    this.type = this.$route.query.type;
    this.nulsGetBlockList();
    this.nulsGetConsensusDetail();
  },
  methods: {
    nulsGetBlockList(pageNumber){
      var _self = this;
      getBlockListAddressAll({"pageNumber":pageNumber,"pageSize":_self.pageSize,"address":_self.address,"type":_self.type},function(res){
        if(res.success){
          if(res.data.list){
            _self.blockList = res.data.list;
            _self.totalDataNumber = res.data.total;
          }else{
            _self.$notify({title: '提示',message: '共识节点出块数据获取失败',type: 'warning'});
          }
        }
      });
    },
    nulsGetConsensusDetail(){
      var _self = this;
      getConsensusAgentDetail({"address":_self.address},function(res){
        if(res.success){
          if(res.data){
            _self.consensusDetail = res.data;
          }else{
            _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.consensusDetail"),type: 'warning'});
          }
          return;
        }
        _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
      });
    }
  }
}
</script>
<style>
  ul.nuls-ul-table li > span{
    width:6.8%;
  }
</style>
