<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/blockList' }">{{$t("blockList.blockList")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("blockDetail.blockDetail")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title nuls-block-detail-title">
      {{height}}
      <div class="nuls-block-operation-box clearfix">
        <span class="float_left nuls-buttom" @click="prevBlock">{{$t("blockDetail.previousBlock")}}</span>
        <span class="float_right nuls-buttom" @click="nextBlock">{{$t("blockDetail.nextBlock")}}</span>
      </div>
    </div>
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">{{$t("blockDetail.blockHash")}}</span><span class="float_right">{{blockheader.hash}}</span></li>
      <li><span class="float_left">{{$t("blockDetail.confirmCount")}}</span><span  class="float_right">{{blockheader.confirmCount}}</span></li>
      <li><span class="float_left">{{$t("blockDetail.transactionCount")}}</span><span class="float_right">{{blockheader.txCount}}</span></li>
      <li><span class="float_left">{{$t("blockDetail.transactionFee")}}</span><span class="float_right">{{blockheader.fee}} NULS</span></li>
      <li><span class="float_left">{{$t("blockDetail.blockNodeName")}}</span><span class="float_right"><router-link :to="{path:'/consensusNode',query:{address:blockheader.packingAddress,type:2}}">{{blockheader.packingAddress}}</router-link></span></li>
      <li><span class="float_left">{{$t("blockList.blockReward")}}</span><span class="float_right">{{blockheader.reward | getInfactCoin}} NULS</span></li>
      <li><span class="float_left">{{$t("blockList.time")}}</span><span class="float_right">{{blockheader.time | formatDate}}</span></li>
      <li><span class="float_left">{{$t("blockList.size")}}</span><span class="float_right">{{blockheader.size}} bytes</span></li>
    </ul>
    <div class="segmentation">
      <i class="nuls-img-icon nuls-img-transaction"></i><span>{{transList.length}}{{$t("second.transactions")}}</span>
    </div>
    <ul class="nuls-transaction-list">
    <li v-for="(txlist,key) in transList" v-bind:class="formatTxClass(txlist.type)">
      <p>{{$t("transDetail.transTypeDetail.i"+txlist.type)}}</p>

      <p><span><router-link :to="{path:'/transactionHash',query:{hash:txlist.hash}}">{{txlist.hash}}</router-link></span><span>{{txlist.time | formatDate}}</span></p>
      <p><span>{{$t("second.block")}}：
        {{txlist.blockHeight}}
      </span><span>{{$t("second.enter")}}/{{$t("second.outPut")}}：&nbsp;{{txlist.inputs|arrayLength}}/{{txlist.outputs|arrayLength}}</span><span>{{$t("second.fee")}}：{{txlist.fee|getInfactCoin}} NULS</span></p>
      <template v-if="txlist.inputs[0] || txlist.outputs[0]">
        <div class="w100" :class="showScroll==0?'scrollHeight':'hideHeight'">
          <div class="w25 float_left">
            <p v-if="!txlist.inputs[0]">&nbsp;</p>
            <p v-for="inputlist in txlist.inputs"><span>
              <router-link :to="{path:'/accountInfo',query:{address:inputlist.address}}">{{inputlist.address}}</router-link>
            </span></p>
          </div>
          <div class="w20 float_left center">
            <i class="nuls-img-icon nuls-img-right-action"></i>
          </div>
          <div class="w55 float_left">
            <p v-for="outputlist in txlist.outputs"><span>
              <router-link :to="{path:'/accountInfo',query:{address:outputlist.address}}">{{outputlist.address}}</router-link>
            </span><span>{{outputlist.value|getInfactCoin}} NULS</span></p>
          </div>
        </div>
      </template>
      <div class="clear"></div>
      <p><span>{{$t("second.amount")}}{{txlist | formatTxAmount}} NULS</span></p>
      <div v-if="txlist.inputs[5] || txlist.outputs[5]" class="list-foot"><a @click="showmore(key)"><i class="nuls-img-icon nuls-img-three-point pointer"></i></a></div>
    </li>
    </ul>
    <div class="text-align-right">
    <el-pagination
    background
    :prev-text="$t('page.previous')"
    :next-text="$t('page.next')"
    layout="total,prev, pager, next,jumper"
    @current-change="nulstxlist"
    :page-size=this.pageSize
    :total=this.totalDataNumber>
    </el-pagination>
    </div>
  </div>
</template>

<script>
import {getTxList,getBlockHeaderDetailByHeight,getBlockHeaderDetailByHash} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatTxClass} from '../assets/js/util.js';
import {brotherComponents} from '../assets/js/public.js';
export default {
  name: "blockDetail",
  data() {
    return {
      listFootHeight: "130px",
      listFootScroll: "hidden",
      showScroll: -1,
      blockheader: {
        confirmCount: 0,
        hash: '',
        consensusMemberCount: 0,
        fee: 0,
        packingAddress: '',
        size: 0,
        time: '',
        reward: 0,
        txCount: 0
      },
      hash: '',
      height: 0,
      totalDataNumber: 0,
      pageSize: 20,
      transList: [{
        showClass: 1,
        hash: '',
        type: '',
        index: '',
        time: '',
        blockHeight: '',
        fee: '',
        value: '',
        inputs: [{txHash: '', index: '', address: '', value: '', createTime: '', lockTime: '', type: '', status: ''}],
        outputs: [{txHash: '', index: '', address: '', value: '', createTime: '', lockTime: '', type: '', status: ''}],
        transferType: '',
        remark: '',
        status: 0,
        confirmCount: 0,
        size: ''
      }]
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    arrayLength(arr) {
      return arr ? arr.length : 0;
    },
    formatTxAmount(txlist) {
      var outputlist = txlist.outputs,
        inputlist = txlist.inputs,
        amout = 0,
        inplength = inputlist.length,
        outlength = outputlist.length;
      for (var i = 0; i < outlength; i++) {
        var txout = outputlist[i];
        amout += txout.value;
        for (var j = 0; j < inplength; j++) {
          var txin = inputlist[j];
          if (txin.address == txout.address) {
            amout -= txout.value;
            break;
          }
        }
      }
      return getInfactCoin(amout);
    },
    getInfactCoin(count) {
      return getInfactCoin(count);
    }
  },
  created: function () {
    var _self = this;
    _self.height = _self.$route.query.height;
    _self.hash = _self.$route.query.hash;
    _self.nulstxlist();
    _self.nulsBlockDetail();
    brotherComponents.$on('searchBlockByHeight', function (v) {
      _self.height = parseInt(v);
      _self.nulstxlist();
      _self.nulsBlockDetail();
    });
    brotherComponents.$on('searchBlockByHash', function (v) {
      _self.height = -1;
      _self.hash = v;
      _self.nulstxlist();
      _self.nulsBlockDetail();
    });
  },
  methods: {
    formatTxClass: function (status) {
      return formatTxClass(status);
    },
    showmore: function(v){
      this.showScroll =this.showScroll=== -1?v:-1;
    },
    prevBlock: function(){
      this.height = parseInt(this.height)-1;
      this.nulstxlist();
      this.nulsBlockDetail();
    },
    nextBlock: function(){
      this.height = parseInt(this.height)+1;
      this.nulstxlist();
      this.nulsBlockDetail();
    },
    nulsBlockDetail: function(){
      var _self = this;
      if(_self.height!=undefined && _self.height>=0){
        getBlockHeaderDetailByHeight({"height":_self.height},function(res){
          if (res.success) {
            _self.blockheader = res.data;
            _self.hash = res.data.hash;
          }else{
            _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
          }
        });
        return false;
      }else{
        getBlockHeaderDetailByHash({"hash":_self.hash},function(res){
          if (res.success) {
            _self.blockheader = res.data;
            _self.height = res.data.height;
          }
          _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
        });
        return false;
      }
    },
    nulstxlist: function (pageNumber) {
      var _self = this;
      getTxList({"pageNumber": pageNumber, "pageSize": _self.pageSize, "blockHeight": _self.height}, function (res) {
        if (res.success) {
          _self.transList = res.data.list;
          _self.totalDataNumber = res.data.total;
        }
      });
    }
  }
}


</script>

<style>
.hideHeight{max-height: 130px;overflow: hidden}
.scrollHeight{height: auto;}
</style>
