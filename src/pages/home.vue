<template>
  <div class="nuls-home-content ">
    <div class="nuls-home-content-head clearfix">
      <div class="nuls-home-content-head-left clearfix">
        <div class="nuls-home-content-head-left-head">
          <div>
            <span><i class="nuls-img-icon nuls-img-consensus"></i></span><label>{{$t("second.index_NULS")}}</label>
          </div>
        </div>
        <div class="nuls-infomation-box entireNetworkInfomation">
          <div class="nuls-block-box nuls-table">
            <div class="nuls-table-row">
              <div class="nuls-table-cell">{{$t("second.totalMortgage")}}</div>
              <div class="nuls-table-cell text-align-right">{{newestBlock.totalDeposit |getInfactCoin}}</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">{{$t("second.consensusNodeAccount")}}</div>
              <div class="nuls-table-cell text-align-right">{{newestBlock.agentCount}}</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">{{$t("second.consensusPeople")}}</div>
              <div class="nuls-table-cell text-align-right">{{newestBlock.consensusAccountNumber}}</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">{{$t("second.tokenCirculation")}}</div>
              <div class="nuls-table-cell text-align-right">1亿</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">{{$t("second.dailyConsensusNodeReward")}}</div>
              <div class="nuls-table-cell text-align-right">{{newestBlock.rewardOfDay | getInfactCoin}}</div>
            </div>
          </div>
          <div class="nuls-block-box nuls-transaction-history" style="background-color:#18242e;">
            <div style="color: #fff;text-align: center;margin-top: 15px;">{{$t("second.history")}}</div>
            <g2-line :charData="txhistory" :id="'g2line'"></g2-line>
          </div>
        </div>

      </div>
      <div class="nuls-home-content-head-right clearfix">
        <div class="nuls-home-content-head-left-head">
          <div class="clearfix">
            <span><i class="nuls-img-icon nuls-img-block"></i></span><label>{{$t("second.block")}}</label><router-link to="/blockList">{{$t("second.more")}}</router-link>
          </div>
        </div>
        <div class="nuls-infomation-box blockInfomation">
          <ul class=" nuls-block-list">

            <li v-for="block in blockList">
              <div>
                <div class="nuls-table-cell">
                  <span>{{$t("second.block")}}</span>
                  <span><router-link :to="{path:'/blockDetail',query:{height:block.height}}">{{block.height}}</router-link></span>
                </div>
                <div class="nuls-table-cell text-align-right">{{block.time | formatDate}}</div>
              </div>
              <div>
                <div class="nuls-table-cell">
                  <span>{{$t("blockDetail.blockNodeName")}}</span>
                  <span><router-link :to="{path:'/consensusNode',query:{address:block.packingAddress,type:2}}">{{block.packingAddress | formatString}}</router-link></span>
                </div>
                <div class="nuls-table-cell">{{block.txCount}}{{$t("second.transactions")}}</div>
                <div class="nuls-table-cell text-align-right">{{block.reward|getInfactCoin}} NULS</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nuls-transaction-container">
      <div class="nuls-transaction-head clearfix">
        <span><i class="nuls-img-icon nuls-img-block"></i></span>
        <label>{{$t("second.transaction")}}</label><router-link to="transactionRecord">{{$t("second.more")}}</router-link></div>
      <ul class="nuls-transaction-list">
        <!--class="yellow-card"-->
        <li v-for="(txlist,key) in transList" v-bind:class="formatTxClass(txlist.type)">
          <p>{{$t("transDetail.transTypeDetail.i"+txlist.type)}}</p>

          <p><span><router-link :to="{path:'/transactionHash',query:{hash:txlist.hash}}">{{txlist.hash}}</router-link></span><span>{{txlist.time | formatDate}}</span></p>
          <p><span>{{$t("second.block")}}：<router-link :to="{path:'/blockDetail',query:{height:txlist.blockHeight}}">{{txlist.blockHeight}}</router-link></span><span>{{$t("second.enter")}}/{{$t("second.outPut")}}：&nbsp;{{txlist.inputs|arrayLength}}/{{txlist.outputs|arrayLength}}</span><span>{{$t("second.fee")}}：{{txlist.fee|getInfactCoin}} NULS</span></p>
          <template v-if="txlist.inputs[0] || txlist.outputs[0]">
            <div class="w100" :class="showScroll==key?'scrollHeight':'hideHeight'">
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
    </div>
  </div>
</template>

<script>
  import G2Line from '@/components/G2Line.vue';
  import {getTxList,getTxByHash,getBlockList,getAllConsensus,getTxhistoryList} from "../assets/js/nuls.js";
  import {formatDate,formatTxClass,formatString,getInfactCoin} from '../assets/js/util.js';
  import { Loading } from 'element-ui';
  export default {
    name: "home",
    components: {
      G2Line
    },
    data () {
      return {
        blockList: [{height: 0, time: '2018-01-01 00:00:00', packingAddress: 'xxxx', txCount: 0, reward: 0}],
        newestBlock: {totalDeposit: 0, agentCount: 0, consensusAccountNumber: 0, rewardOfDay: 0},
        transList: [{
          showClass: 'hideHeight',
          hash: 'xxxxxxxxx',
          type: '1',
          index: '',
          time: '2018-01-01 00:00:00',
          blockHeight: 0,
          fee: 0,
          value: 0,
          inputs: [{txHash: '', index: '', address: '', value: 0, createTime: '', lockTime: '', type: 1, status: 1}],
          outputs: [{txHash: '', index: '', address: '', value: 0, createTime: '', lockTime: '', type: 1, status: 1}],
          transferType: 1,
          remark: '',
          status: 0,
          confirmCount: 0,
          size: 110
        }],
        txhistory: [{day: '', value: 0}],
        showScroll: -1
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
      arrayLength(arr){
        return arr?arr.length:0;
      },
      formatTxAmount(txlist){
        var outputlist = txlist.outputs,
          inputlist = txlist.inputs,
          amout = 0,
          inplength = inputlist.length,
          outlength = outputlist.length;
        for(var i=0;i< outlength;i++){
          var txout = outputlist[i];
          amout+= txout.value;
          for(var j=0;j< inplength;j++){
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
    created:function(){
      this.nulsGetBlockList();
    },
    methods: {
      formatTxClass:function(status){
        return formatTxClass(status);
      },
      showmore: function(v){
        this.showScroll =this.showScroll=== -1?v:-1;
      },
      nulsGetBlockList:function(){
        var _self = this;
        var loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        getBlockList({"pageNumber":1,"pageSize":6},function(res){
          if(res.success){
            if(res.data.list&&res.data.list.length > 0){
              _self.blockList = res.data.list;
            }else{
              _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.noBlockMessage"),type: 'warning'});
            }
          }
        });
        getAllConsensus(function(res){
          if(res.success){
            _self.newestBlock=res.data;
          }
        });
        getTxhistoryList(function(res){
          if(res.success){
            var arrayData=res.data,len=arrayData.length;
            for(var i=0;i<len;i++){
              _self.txhistory.push({day:arrayData[i].createTime,value:arrayData[i].txCount});
            }
          }
        });
        getTxList({"pageNumber":1,"pageSize":5},function(res){
          loading.close();
          if(res.success){
            if(res.data.list&&res.data.list.length > 0){
              _self.transList=res.data.list;
              return;
            }else{
              _self.$notify({title: _self.$t("notice.notice"),message: _self.$t("notice.noTransMessage"),type: 'warning'});
            }
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
