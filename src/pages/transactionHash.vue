<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/transactionRecord' }">{{$t("second.transaction")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("transDetail.transDetail")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      {{$t("transDetail.transDetail")}}
    </div>
    <!-- transaction detail start -->
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">{{$t("transDetail.transType")}}</span><span class="float_right">{{$t("transDetail.transTypeDetail.i"+txdetail.type)}}</span></li>
      <li><span class="float_left">{{$t("transDetail.transHash")}}</span><span  class="float_right">{{hash}}</span></li>
      <li><span class="float_left">{{$t("transDetail.transHeight")}}</span><span class="float_right"><router-link :to="{path:'/blockDetail',query:{height:txdetail.blockHeight}}">{{txdetail.blockHeight}}</router-link></span></li>
      <li><span class="float_left">{{$t("transDetail.transConfirmCount")}}</span><span class="float_right">{{txdetail.confirmCount}}</span></li>
      <li><span class="float_left">{{$t("transDetail.transTime")}}</span><span class="float_right">{{txdetail.time | formatDate}}</span></li>
      <li><span class="float_left">{{$t("transDetail.transInput")}}</span><span class="float_right">{{txdetail.inputs|getArrayAmout}} NULS</span></li>
      <li><span class="float_left">{{$t("transDetail.transOutput")}}</span><span class="float_right">{{txdetail.outputs|getArrayAmout}} NULS</span></li>
      <li><span class="float_left">{{$t("transDetail.transFee")}}</span><span class="float_right">{{txdetail.fee|getInfactCoin}} NULS</span></li>
    </ul>
    <!-- transaction detail end -->

    <!-- transaction list start -->
    <div class="tx_list">
      <div class="w49 float_left tx_background">
        <div class="tx_head">{{$t("second.enter")}}</div>
        <ul class="tx_description" :class="showAllInputs==1?'scrollHeight':'hideHeight_trans'">
          <li v-if="!txdetail.inputs[0]">
            <span class="float_left">{{$t("notice.noMessage")}}</span>
            <span class="float_right">&nbsp;</span>
          </li>
          <li v-for="inplist in txdetail.inputs">
            <router-link :to="{path:'/accountInfo',query:{address:inplist.address}}">{{inplist.address|formatString}}</router-link>
            <span class="float_right">（{{inplist.value | getInfactCoin}}&nbsp;-&nbsp;<span @click="hashDetail(inplist.fromHash)" class="baseColor pointer">Output</span>）</span>
          </li>
        </ul>
        <div v-if="txdetail.inputs[5]" class="tx_description center">
          <i @click="showMore(-1)" class="nuls-img-icon nuls-img-three-point pointer"></i>
        </div>
      </div>
      <div class="w49 float_right tx_background">
        <div class="tx_head">{{$t("second.outPut")}}</div>
        <ul class="tx_description" :class="showAllOutputs==1?'scrollHeight':'hideHeight_trans'">
          <li v-if="!txdetail.outputs[0]">
            <span class="float_left">{{$t("notice.noMessage")}}</span>
            <span class="float_right">&nbsp;</span>
          </li>
          <li v-for="outlist in txdetail.outputs">
            <router-link :to="{path:'/accountInfo',query:{address:outlist.address}}">{{outlist.address|formatString}}</router-link>
            <span class="float_right">（{{outlist.value | getInfactCoin}}&nbsp;-&nbsp;<span @click="toSpentByHash(outlist.status,outlist.index,outlist.txHash)" v-bind:class="formatUTXOClass(outlist.status)">{{outlist.status|formatUTXOStatus}}</span>）</span>
          </li>
        </ul>
        <div v-if="txdetail.outputs[5]" class="tx_description center">
          <i @click="showMore(-2)" class="nuls-img-icon nuls-img-three-point pointer"></i>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!-- transaction list end -->
  </div>
</template>

<script>
import {getTxList,getTxByHash,getTxSpentHashDetail} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatUTXOStatus,formatUTXOClass,formatString} from '../assets/js/util.js';
import {brotherComponents} from '../assets/js/public.js';
    export default {
      name: "transactionHash",
      data() {
        return {
          hash: '',
          showAllInputs: 0,
          showAllOutputs: 0,
          txdetail: {
            type: 0,
            blockHeight: 0,
            confirmCount: 0,
            time: '',
            fee: 0,
            outputs: [{
              txHash: '',
              index: '',
              address: '',
              value: '',
              createTime: '',
              lockTime: '',
              type: '',
              status: ''
            }],
            inputs: [{
              txHash: '',
              index: '',
              address: '',
              value: '',
              createTime: '',
              lockTime: '',
              type: '',
              status: ''
            }]
          }
        }
      },
      filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date);
        },
        formatString(str){
          return formatString(str);
        },
        getInfactCoin(count) {
          return getInfactCoin(count);
        },
        formatUTXOStatus(status){
          return formatUTXOStatus(status);
        },
        getArrayAmout(arraydata){
          var amount = 0,len=arraydata.length;
          for(var i = 0;i<len;i++){
            amount += arraydata[i].value;
          }
          return getInfactCoin(amount);
        }
      },
      created: function () {
        var _self = this;
        _self.hash = this.$route.query.hash;
        _self.nulstxdetail();
      },
      methods: {
        getInfactCoin(count){
          return getInfactCoin(count);
        },
        formatUTXOClass(status){
          return formatUTXOClass(status);
        },
        /**
         * 根据交易index和hash查询已花费的hash，并获取该hash的详情
         * Query the hash that has been spent based on the transaction index and hash, and get the details of the hash
         */
        toSpentByHash: function(status,index,hash){
          if(status == 3){
            var _self = this;
            getTxSpentHashDetail({"txHash":hash,"index":index},function(res){
              if (res.success) {
                _self.txdetail = res.data;
                _self.hash = res.data.hash;
              }else{
                _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
              }
            });
          }
        },
        /**
         * 根据交易hash查询交易详情
         * Query transaction details based on transaction hash
         */
        nulstxdetail: function () {
          var _self = this;
          getTxByHash({"hash":_self.hash},function(res){
            if (res.success) {
              _self.txdetail = res.data;
            }else{
              _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
            }
          })
        },
        hashDetail: function(hash){
          this.hash = hash;
          this.nulstxdetail();
        },
        showMore: function(v){
          if(v === -1){
            this.showAllInputs = this.showAllInputs=== 0 ? 1: 0;
          }else{
            this.showAllOutputs = this.showAllOutputs=== 0 ? 1: 0;
          }
        }
      },
    }
</script>

<style>
</style>
