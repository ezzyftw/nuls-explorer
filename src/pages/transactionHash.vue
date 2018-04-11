<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/transactionRecord' }">交易列表</el-breadcrumb-item>
        <el-breadcrumb-item>交易Hash</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      {{$t("transDetail.transDetail")}}
    </div>
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
    <div class="tx_list">
      <div class="w49 float_left tx_background">
        <div class="tx_head">{{$t("second.enter")}}</div>
        <ul class="tx_description">
          <li v-if="!txdetail.inputs[0]">
            <span class="float_left">{{$t("notice.noMessage")}}</span>
            <span class="float_right">&nbsp;</span>
          </li>
          <li v-for="inplist in txdetail.inputs">
            <router-link :to="{path:'/accountInfo',query:{address:inplist.address}}">{{inplist.address}}</router-link>
            <span class="float_right" @click="hashDetail(inplist.txHash)">（{{inplist.value | getInfactCoin}}&nbsp;-&nbsp;<span class="baseColor pointer">Output</span>）</span>
          </li>
        </ul>
      </div>
      <div class="w49 float_right tx_background">
        <div class="tx_head">{{$t("second.outPut")}}</div>
        <ul class="tx_description">
          <li v-if="!txdetail.outputs[0]">
            <span class="float_left">{{$t("notice.noMessage")}}</span>
            <span class="float_right">&nbsp;</span>
          </li>
          <li v-for="outlist in txdetail.outputs">
            <router-link :to="{path:'/accountInfo',query:{address:outlist.address}}">{{outlist.address}}</router-link>
            <span class="float_right" @click="hashDetail(outlist.txHash)">（{{outlist.value | getInfactCoin}}&nbsp;-&nbsp;<span v-bind:class="formatUTXOClass(outlist.status)">{{outlist.status|formatUTXOStatus}}</span>）</span>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import {getTxList,getTxByHash} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatUTXOStatus,formatUTXOClass} from '../assets/js/util.js';
import {brotherComponents} from '../assets/js/public.js';
    export default {
      name: "transactionHash",
      data() {
        return {
          hash: '',
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
          return formatDate(date, "yyyy-MM-dd hh:mm");
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
        brotherComponents.$on('searchTransactionByHash', function (v) {
          _self.hash = v;
          _self.nulstxdetail();
        });
      },
      methods: {
        getInfactCoin(count){
          return getInfactCoin(count);
        },
        formatUTXOClass(status){
          return formatUTXOClass(status);
        },
        nulstxdetail: function (pageNumber) {
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
        }
      },
    }
</script>

<style>

</style>
