<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t("nav.index")}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t("nav.currencyAccount")}}</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="nuls-title">{{$t("nav.currencyAccount")}}</div>
    <div>
      <ul class="nuls-ul-table">
        <li class="head">
          <span>
            <ul class="nuls-ul-sub-table">
              <li>
                <span >{{$t("currencyAccount.number")}}</span>
                <span >{{$t("currencyAccount.address")}}</span>
                <span>{{$t("currencyAccount.balance")}}</span>
                <span >{{$t("currencyAccount.transactionCount")}}</span>
              </li>
            </ul>
          </span>
        </li>
        <li class="content">
          <span>
            <ul class="nuls-ul-sub-table">
              <li v-for="(block,key) in blockList">
                <span>{{key+1}}</span>
                <span><router-link :to="{path:'/accountInfo',query:{address:block.address}}">{{block.address|formatString}}</router-link></span>
                <span class="text-align-left text-padding-7">{{block.balance | getInfactCoin}}</span>
                <span>{{block.txCount}}</span>
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
          @current-change="nulsGetBalanceListRank"
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
  import {getBalanceListRank} from "../assets/js/nuls.js";
  import {formatDate,getInfactCoin,formatString} from '../assets/js/util.js';
  export default {
    name: "cashAccount",
    data () {
      return {
        blockList: [{id:0,address:'',balance:'',txCount:0,createTime:0}],
        totalDataNumber: 0,
        pageSize: 20,
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      },
      getInfactCoin(count){
        return getInfactCoin(count);
      },
      formatString(address){
        return formatString(address);
      }
    },
    created:function(){
      this.nulsGetBalanceListRank();
    },
    methods: {
      nulsGetBalanceListRank(pageNumber){
        var _self = this;
        getBalanceListRank({"pageNumber":pageNumber,"pageSize":_self.pageSize},function(res){
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
  ul.nuls-ul-table>li > span>ul.nuls-ul-sub-table>li>span:nth-child(1){
    width:6%;
  }
  ul.nuls-ul-table>li > span>ul.nuls-ul-sub-table>li>span:nth-child(2){
    width:30%;
  }
</style>
