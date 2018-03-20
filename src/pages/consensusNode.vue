<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>共识节点</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      共识节点
    </div>
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">帐户信息</span><span class="float_right">0xf20255f9b5c0545029d7313f9b5c05450290247ed3ade7cb</span></li>
      <li><span class="float_left">出块地址</span><span  class="float_right">d4f85a6s4df6a54f5a4s6f4asd4f5as45f6a4s5f4a5sd4fa4sd6f4a6s4df5as64df</span></li>
      <li><span class="float_left">节点名称</span><span  class="float_right">雷霆节点</span></li>
      <li><span class="float_left">共识状态</span><span class="float_right">共识中</span></li>
      <li><span class="float_left">出块数量</span><span class="float_right">30,213 blocks</span></li>
      <li><span class="float_left">交易数量</span><span class="float_right">32,1546,566 txns</span></li>
      <li><span class="float_left">保证金</span><span class="float_right">266,897,00 NULS</span></li>
    </ul>
    <div style="height:40px;"></div>
    <ul class="nuls-ul-table">
      <li class="head">
        <span>高度</span>
        <span>时间</span>
        <span>交易数量</span>
        <span>大小(byte)</span>
        <span>块收益</span>
      </li>
      <li class="content">
        <span><router-link to="/blockDetail">5170115</router-link></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>
      <li class="content">
        <span><a>5170115</a></span>
        <span>2018-03-02 12:32:12</span>
        <span>16820</span>

        <span>800,000</span>
        <span>30.13123 NULS</span>
      </li>



      <li class="foot">
        <span></span>
        <span>
            <el-pagination
              background
              prev-text="上一页"
              next-text="下一页"
              layout="total,prev, pager, next,jumper"
              :total="100">
            </el-pagination>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "blockDetail"
    }
</script>

<style scoped>

</style>
