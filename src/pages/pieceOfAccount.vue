<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("nav.outPieceAccount")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="nuls-title">
      {{$t("nav.outPieceAccount")}}
    </div>
    <div>
      <!--list start-->
      <ul class="nuls-ul-table" ref="contentInfo">
        <li class="head">
          <span>
            <ul class="nuls-ul-sub-table">
              <li>
                <span>{{$t("outPieceAccount.number")}}</span>
                <span >{{$t("outPieceAccount.address")}}</span>
                <span>{{$t("outPieceAccount.blockReward")}}</span>
                <span>{{$t("outPieceAccount.reward")}}</span>
                <span>{{$t("outPieceAccount.lastRewardBlock")}}</span>
                <span>{{$t("outPieceAccount.consensusStatus")}}</span>
              </li>
            </ul>
          </span>

        </li>
        <li class="content">
          <span>
            <ul class="nuls-ul-sub-table">
              <li v-for="(block,key) in blockList">
                <span>{{key+1}}</span>
                <span><router-link :to="{path:'/consensusNode',query:{address:block.agentAddress,type:1}}">{{block.agentAddress | formatString}}</router-link></span>
                <span>{{block.minedCount}}</span>
                <span>{{block.reward | getInfactCoin}}</span>
                <span>{{block.lastHeight}}</span>
                <span>{{$t("consensusNode.consensusFormatter.i"+block.consensusStatus)}}</span>
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
          @current-change="nulsGetMinedlist"
          :page-size=this.pageSize
          :total=this.totalDataNumber>
        </el-pagination>
          </span>
        </li>
      </ul>
      <!--list end-->
    </div>
  </div>
</template>

<script>
  import {getAddressMinedlist} from "../assets/js/nuls.js";
  import {formatConsensusStatus,getInfactCoin,formatString} from '../assets/js/util.js';
  export default {
    name: "pieceOfAccount",
    data () {
      return {
        blockList: [{id:0,consensusAddress:'',minedCount:'',reward:0,lastHeight:0,consensusStatus:0,createTime:'',agentAddress:''}],
        totalDataNumber: 0,
        pageSize: 20
      }
    },
    filters: {
      formatConsensusStatus(status) {
        return formatConsensusStatus(status);
      },
      getInfactCoin(count) {
        return getInfactCoin(count);
      },
      formatString(str){
        return formatString(str);
      }
    },
    created:function(){
      this.nulsGetMinedlist();
    },
    methods: {
      /**
       * 加载所有出块账户列表，分页加载
       * Load all out of block account list, page load
       */
      nulsGetMinedlist(pageNumber){
        var _self = this;
        getAddressMinedlist({"pageNumber":pageNumber,"pageSize":_self.pageSize},function(res){
          if(res.success){
            if(res.data.list){
              _self.blockList = res.data.list;
              _self.totalDataNumber = res.data.total;
            }else{
              _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.noMessage"),type: 'warning'});
            }
            return;
          }else{
            _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
          }
        })
      }
    }
  }
</script>

<style>
  ul.nuls-ul-table>li > span>ul.nuls-ul-sub-table>li>span:nth-child(2){
    width:30%;
  }
</style>
