<template>
  <div class="nuls-content">
    <!--nav start-->
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("accountInfo.accountInfo")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <!--nav end-->

    <div class="nuls-title">
      {{$t("accountInfo.accountInfo")}}
    </div>

    <!--address detail start-->
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">{{$t("accountInfo.address")}}</span><span class="float_right">{{address}}</span></li>
      <li><span class="float_left">{{$t("accountInfo.canUseBalance")}}</span><span class="float_right">{{accountInfo.balance|getInfactCoin}} NULS</span></li>
      <li><span class="float_left">{{$t("accountInfo.freezeBalance")}}</span><span class="float_right">{{accountInfo.locked|getInfactCoin}} NULS</span></li>
      <li><span class="float_left">{{$t("accountInfo.transactionCount")}}</span><span class="float_right">{{txCount}}</span></li>
    </ul>
    <!--address detail end-->

    <div class="segmentation">
      <i class="nuls-img-icon nuls-img-transaction"></i><span>{{txCount}}{{$t("second.transactions")}}</span>
    </div>

    <!--transaction list start-->
    <ul class="nuls-transaction-list">
      <li v-for="(txlist,key) in transList" v-bind:class="formatTxClass(txlist.type)">
        <p>{{$t("transDetail.transTypeDetail.i"+txlist.type)}}</p>
        <p>
          <span class="baseColor pointer" @click="toTransactionHash(txlist.hash)">{{txlist.hash}}</span>
          <span>{{txlist.time | formatDate}}</span>
        </p>
        <p>
          <span>{{$t("second.block")}}：<a class="pointer" @click="toBlockDetail(txlist.blockHeight)">{{txlist.blockHeight}}</a></span>
          <span>{{$t("second.enter")}}/{{$t("second.outPut")}}：&nbsp;{{txlist.inputs|arrayLength}}/{{txlist.outputs|arrayLength}}</span>
          <span>{{$t("second.fee")}}：{{txlist.fee|getInfactCoin}} NULS</span>
        </p>
        <template v-if="txlist.inputs[0] || txlist.outputs[0]">
          <div class="w100" :class="showScroll==key?'scrollHeight':'hideHeight'">
            <div class="w25 float_left">
              <p v-if="!txlist.inputs[0]">&nbsp;</p>
              <p v-for="inputlist in txlist.inputs">
                <span class="pointer baseColor" @click="reloadAccount(inputlist.address)">{{inputlist.address}}</span>
              </p>
            </div>
            <div class="w20 float_left center">
              <i class="nuls-img-icon nuls-img-right-action"></i>
            </div>
            <div class="w55 float_left">
              <p v-for="outputlist in txlist.outputs">
                <span class="pointer baseColor" @click="reloadAccount(outputlist.address)">{{outputlist.address}}</span>
                <span>{{outputlist.value|getInfactCoin}} NULS</span>
              </p>
            </div>
          </div>
        </template>
        <div class="clear"></div>
        <p>
          <span>{{$t("second.amount")}}{{txlist | formatTxAmount}} NULS</span>
        </p>
        <div v-if="txlist.inputs[5] || txlist.outputs[5]" class="list-foot">
          <a @click="showmore(key)"><i class="nuls-img-icon nuls-img-three-point pointer"></i></a>
        </div>
      </li>
    </ul>
    <!--transaction list end-->

    <!--pagination start-->
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
    <!--pagination end-->

  </div>
</template>

<script>
import {getAccountByAddress,getTxList} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatTxClass} from '../assets/js/util.js';
import {brotherComponents} from '../assets/js/public.js';
    export default {
      name: "blockDetail",
      data() {
        return {
          address: '',
          txCount: 0,
          totalDataNumber: 0,
          pageSize: 20,
          showScroll: -1,
          accountInfo: {balance: 0, usable: 0, locked: 0},
          transList: [{
            hash: '',
            type: '',
            index: '',
            time: '',
            blockHeight: '',
            fee: '',
            value: '',
            inputs: [{
              txHash: '',
              index: '',
              address: '',
              value: '',
              createTime: '',
              lockTime: '',
              type: '',
              status: ''
            }],
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
            transferType: '',
            remark: '',
            status: 0,
            confirmCount: '',
            size: ''
          }]
        }
      },
      filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date);
        },
        arrayLength(arr){
          return arr?arr.length:0;
        },
        /*
        *计算这笔交易的输入减去输出后的余额
        *Calculate the input of this transaction minus the balance after output
        */
        formatTxAmount(txlist){
          var outputlist = txlist.outputs,inputlist = txlist.inputs,amout = 0,inplength = inputlist.length,outlength = outputlist.length;
          for(var i=0;i < outlength;i++){
            var txout = outputlist[i];
            amout+= txout.value;
            for(var j=0;j < inplength;j++){
              var txin = inputlist[j];
              if(txin.address == txout.address){
                amout-= txout.value;
                break;
              }
            }
          }
          return getInfactCoin(amout);
        },
        getInfactCoin(count){
          return getInfactCoin(count);
        }
      },
      created: function () {
        var _self = this;
        _self.address = _self.$route.query.address;
        _self.nulstxlist();
        _self.nulsloadDetail();
      },
      methods: {
        formatTxClass:function(status){
          return formatTxClass(status);
        },
        showmore: function(v){
          this.showScroll =this.showScroll=== -1?v:-1;
        },
        /*
        *reload address detail,then back to top of page
        *根据地址重新加载网页内容，完成后返回网页顶部
        */
        reloadAccount: function(address){
          this.address = address;
          this.nulstxlist();
          this.nulsloadDetail();
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
        /*
        *跳转块详情
        * to block detail
        */
        toBlockDetail: function(height){
          this.$router.push({path:'/blockDetail',query:{height:height}});
        },
        /*
        *跳转交易详情
        * to transaction detail
        */
        toTransactionHash: function(hash){
          this.$router.push({path:'/transactionHash',query:{hash:hash}});
        },
        nulsloadDetail: function(){
          var _self = this;
          getAccountByAddress({"address":_self.address},function(res){
            if (res.success) {
              _self.accountInfo = res.data;
            }
          });
        },
        nulstxlist: function (pageNumber) {
          var _self = this;
          getTxList({"pageNumber":pageNumber,"pageSize":_self.pageSize,"address":_self.address},function(res){
            if(res.success){
              _self.transList=res.data.list;
              _self.totalDataNumber = res.data.total;
              _self.txCount = _self.totalDataNumber;
            }else{
              _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
            }
          });
        }
      }
    }
</script>

<style>
</style>
