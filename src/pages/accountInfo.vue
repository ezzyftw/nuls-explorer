<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("accountInfo.accountInfo")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      {{$t("accountInfo.accountInfo")}}
    </div>
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">{{$t("accountInfo.address")}}</span><span class="float_right">{{address}}</span></li>
      <li><span class="float_left">{{$t("accountInfo.canUseBalance")}}</span><span class="float_right">{{accountInfo.balance|getInfactCoin}} NULS</span></li>
      <li><span class="float_left">{{$t("accountInfo.freezeBalance")}}</span><span class="float_right">{{accountInfo.locked|getInfactCoin}} NULS</span></li>
      <li><span class="float_left">{{$t("accountInfo.transactionCount")}}</span><span class="float_right">{{txCount}}</span></li>
    </ul>
    <div class="segmentation">
      <i class="nuls-img-icon nuls-img-transaction"></i><span>{{txCount}}{{$t("second.transactions")}}</span>
    </div>
    <ul class="nuls-transaction-list">
      <li v-for="(txlist,key) in transList" v-bind:class="formatTxClass(txlist.type)">
        <p>{{$t("transDetail.transTypeDetail.i"+txlist.type)}}</p>

        <p><span><router-link :to="{path:'/transactionHash',query:{hash:txlist.hash}}">{{txlist.hash}}</router-link></span><span>{{txlist.time | formatDate}}</span></p>
        <p><span>{{$t("second.block")}}：<router-link :to="{path:'/blockDetail',query:{height:txlist.blockHeight}}">{{txlist.blockHeight}}</router-link></span><span>{{$t("second.enter")}}/{{$t("second.outPut")}}：&nbsp;{{txlist.inputs|arrayLength}}/{{txlist.outputs|arrayLength}}</span><span>{{$t("second.fee")}}：{{txlist.fee|getInfactCoin}} NULS</span></p>
        <template v-if="txlist.inputs[0] || txlist.outputs[0]">
          <div class="w100" :class="showScroll==key?'scrollHeight':'hideHeight'">
            <div class="w25 float_left">
              <p v-if="!txlist.inputs[0]">&nbsp;</p>
              <p v-for="inputlist in txlist.inputs"><span class="pointer baseColor" @click="reloadAccount(inputlist.address)">{{inputlist.address}}</span></p>
            </div>
            <div class="w20 float_left center">
              <i class="nuls-img-icon nuls-img-right-action"></i>
            </div>
            <div class="w55 float_left">
              <p v-for="outputlist in txlist.outputs"><span class="pointer baseColor" @click="reloadAccount(outputlist.address)">{{outputlist.address}}</span><span>{{outputlist.value|getInfactCoin}} NULS</span></p>
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
import {getAccountByAddress,getTxList} from "../assets/js/nuls.js";
import {formatDate,getInfactCoin,formatTxClass,formatTxStatus} from '../assets/js/util.js';
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
          return formatDate(date, "yyyy-MM-dd hh:mm:ss");
        },
        formatTxStatus(status){
          return formatTxStatus(status);
        },
        arrayLength(arr){
          return arr?arr.length:0;
        },
        formatTxAmount(txlist){
          var outputlist = txlist.outputs,
            inputlist = txlist.inputs,
            amout = 0,
            inplength = inputlist.length,
            outlength = outputlist.length;
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
        brotherComponents.$on('searchAccountByAddress', function (v) {
          _self.address = v;
          _self.nulstxlist();
          _self.nulsloadDetail();
        });
      },
      methods: {
        formatTxClass:function(status){
          return formatTxClass(status);
        },
        showmore: function(v){
          this.showScroll =this.showScroll=== -1?v:-1;
        },
        reloadAccount: function(address){
          this.address = address;
          this.nulstxlist();
          this.nulsloadDetail();
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
              return;
            }
            _self.$alert(_self.$t("notice.noNet"), _self.$t("notice.notice"), {confirmButtonText: _self.$t("notice.determine")});
          });
        }
      }
    }
</script>

<style>
.hideHeight{max-height: 130px;overflow: hidden}
.scrollHeight{height: auto;}
</style>
