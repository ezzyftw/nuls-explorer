<template>
  <div class="nuls-content">
    <!--nav start-->
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/blockList' }">{{$t("blockList.blockList")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("blockDetail.blockDetail")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <!--nav end-->

    <!--Previous Block & Next Block start-->
    <div class="nuls-title nuls-block-detail-title">
      {{height}}
      <div class="nuls-block-operation-box clearfix">
        <span class="float_left nuls-buttom" :class="{'pointer':prevBlockUsed}" @click="prevBlock">{{$t("blockDetail.previousBlock")}}</span>
        <span class="float_right nuls-buttom" :class="{'pointer':nextBlockUsed}" @click="nextBlock">{{$t("blockDetail.nextBlock")}}</span>
      </div>
    </div>
    <!--Previous Block & Next Block end-->

    <!--block detail start-->
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
    <!--block detail end-->

    <div class="segmentation" v-show="showTransHeader">
      <i class="nuls-img-icon nuls-img-transaction"></i><span>{{blockheader.txCount}}{{$t("second.transactions")}}</span>
    </div>

    <!--transaction list start-->
    <ul class="nuls-transaction-list" v-show="showTransHeader">
    <li v-for="(txlist,key) in transList" v-bind:class="formatTxClass(txlist.type)">
      <p>{{$t("transDetail.transTypeDetail.i"+txlist.type)}}</p>
      <p>
        <span class="baseColor pointer" @click="toTransactionHash(txlist.hash)">{{txlist.hash}}</span>
        <span>{{txlist.time | formatDate}}</span>
      </p>
      <p>
        <span>{{$t("second.block")}}：{{txlist.blockHeight}}</span>
        <span>{{$t("second.enter")}}/{{$t("second.outPut")}}：&nbsp;{{txlist.inputs|arrayLength}}/{{txlist.outputs|arrayLength}}</span>
        <span>{{$t("second.fee")}}：{{txlist.fee|getInfactCoin}} NULS</span>
      </p>
      <template v-if="txlist.inputs[0] || txlist.outputs[0]">
        <div class="w100" :class="showScroll==key?'scrollHeight':'hideHeight'">
          <div class="w25 float_left">
            <p v-if="!txlist.inputs[0]">&nbsp;</p>
            <p v-for="inputlist in txlist.inputs">
              <span class="baseColor pointer" @click="toAccountInfo(inputlist.address)">{{inputlist.address}}</span>
            </p>
          </div>
          <div class="w20 float_left center">
            <i class="nuls-img-icon nuls-img-right-action"></i>
          </div>
          <div class="w55 float_left">
            <p v-for="outputlist in txlist.outputs">
              <span class="baseColor pointer" @click="toAccountInfo(outputlist.address)">{{outputlist.address}}</span>
              <span>{{outputlist.value|getInfactCoin}} NULS</span>
            </p>
          </div>
        </div>
      </template>
      <div class="clear"></div>
      <p><span>{{$t("second.amount")}}{{txlist | formatTxAmount}} NULS</span></p>
      <div v-if="txlist.inputs[5] || txlist.outputs[5]" class="list-foot">
        <a @click="showmore(key)"><i class="nuls-img-icon nuls-img-three-point pointer"></i></a>
      </div>
    </li>
    </ul>
    <!--transaction list end-->

    <!--pagination start-->
    <div class="text-align-right" v-show="showTransHeader">
      <el-pagination
      background
      :prev-text="$t('page.previous')"
      :next-text="$t('page.next')"
      layout="total,prev, pager, next,jumper"
      @current-change="nulstxlist"
      :page-size=this.pageSize
      :total=this.totalDataNumber>
      </el-pagination>
  <!--pagination end-->
    </div>
  </div>
</template>

<script>
import {getTxList,getBlockHeaderDetailByHeight,getBlockHeaderDetailByHash,getBlockBesthashDetail} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatTxClass,getTransactionResultAmount} from '../assets/js/util.js';
export default {
  name: "blockDetail",
  data() {
    return {
      prevBlockUsed: true,
      nextBlockUsed: true,
      showTransHeader: true,
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
        hash: ' ',
        type: '0',
        index: '',
        time: '2018-01-01 00:00:00',
        blockHeight: '0',
        fee: '0',
        value: '0',
        inputs: [{txHash: '', index: '', address: '', value: '', createTime: '', lockTime: '', type: '', status: ''}],
        outputs: [{txHash: '', index: '', address: '', value: '', createTime: '', lockTime: '', type: '', status: ''}],
        transferType: '0',
        remark: '0',
        status: 0,
        confirmCount: 0,
        size: '0'
      }]
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date);
    },
    arrayLength(arr) {
      return arr ? arr.length : 0;
    },
    /*
    *计算这笔交易的输入减去输出后的余额
    *Calculate the input of this transaction minus the balance after output
    */
    formatTxAmount(txlist){
      return getInfactCoin(getTransactionResultAmount(txlist));
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
  },
  watch: {
    /*height:{
      handler:(val,oldVal)=>{
        console.log(val);
        console.log(oldVal);
      }
    }*/
  },
  methods: {
    formatTxClass: function (status) {
      return formatTxClass(status);
    },
    /*
    *跳转账户详情
    * to account detail
    */
    toAccountInfo: function(address){
      this.$router.push({path:'/accountInfo',query:{address:address}});
    },
    /*
    *跳转交易详情
    * to transaction detail
    */
    toTransactionHash: function(hash){
      this.$router.push({path:'/transactionHash',query:{hash:hash}});
    },
    /*
    *show more
    *显示更多
    */
    showmore: function(v){
      this.showScroll =this.showScroll=== -1?v:-1;
    },
    /*
    *load prevBlock, If the previous block is less than 0, clicks are prohibited
    *加载上一个区块，如果上一个区块小于0，就禁止点击
    */
    prevBlock: function(){
      var newHeight = parseInt(this.height)-1;
      if(newHeight < 0){
        this.prevBlockUsed = false;
      }else{
        this.prevBlockUsed = true;
        this.height = newHeight;
        /*
        *Modify history to prevent users from refreshing pages incorrectly
        *修改历史记录，防止用户刷新页面不正确
        */
        history.pushState(null,"","/blockDetail?height="+newHeight);
        this.nulstxlist();
        this.nulsBlockDetail();
      }
    },
    /*
    *load nextBlock, If the next block does not exist, click is prohibited
    *加载下一个区块，如果下一个区块不存在，就禁止点击
    */
    nextBlock: function(){
      var _this = this;
      getBlockBesthashDetail(function(res){
        if(res.success){
          var newHeight = parseInt(_this.height)+1,bestHeight = res.data.height;
          if(newHeight<=bestHeight){
            _this.height = newHeight;
            /*
            *Modify history to prevent users from refreshing pages incorrectly
            *修改历史记录，防止用户刷新页面不正确
            */
            history.pushState(null,"","/blockDetail?height="+newHeight);
            _this.nulstxlist();
            _this.nulsBlockDetail();
            _this.nextBlockUsed = true;
          }else{
            _this.nextBlockUsed = false;
          }
        }
      })
    },

    /*
    *Load block details, if the height exists, according to the height load, if the hash exists according to the hash load, and recalculate whether it is possible to click on the next block and the previous block
    *加载区块详情，如果高度存在就根据高度加载，如果hash存在就根据hash加载，并重新计算是否可以点击下一个区块和上一个区块
    */
    nulsBlockDetail: function(){
      var _self = this;
      if(_self.height!=undefined && _self.height>=0){
        getBlockHeaderDetailByHeight({"height":_self.height},function(res){
          if (res.success) {
            _self.blockheader = res.data;
            _self.hash = res.data.hash;
            _self.prevBlockUsed = parseInt(_self.height)-1 < 0? false: true;
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
            _self.prevBlockUsed = parseInt(_self.height)-1 < 0? false: true;
          }else{
            _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
          }
        });
        return false;
      }
    },
    /*
    *Load the transaction list under this block
    *加载该区块下的交易列表
    */
    nulstxlist: function (pageNumber) {
      var _self = this;
      getTxList({"pageNumber": pageNumber, "pageSize": _self.pageSize, "blockHeight": _self.height}, function (res) {
        if (res.success) {
          if(res.data.list[0]){
            _self.transList = res.data.list;
            _self.totalDataNumber = res.data.total;
            _self.showTransHeader = true;
          }else{
            _self.showTransHeader = false;
          }
        }
      });
    }
  }
}
</script>

<style>
</style>
