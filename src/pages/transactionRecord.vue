<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>交易列表</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      交易
    </div>
    <ul class="nuls-transaction-list">
      <li class="yellow-card">
        <p>转帐</p>
        <p><span><a>a46w5e4ra1s65df4a86df51a6sd4f56af56asd4fas4df5a64d</a></span><span>2018-02-03 19:30:26</span></p>
        <p><span>区块：<a>1282</a></span><span>输入/输出：<a>4/2</a></span><span>手续费:0.08769 NULS</span></p>
      </li>
      <li class="consensus-reward">
        <p>共识奖励</p>
        <p><span><a>a46w5e4ra1s65df4a86df51a6sd4f56af56asd4fas4df5a64d</a>&nbsp;&nbsp;(确认次数:10)</span><span>2018-02-03 19:30:26</span></p>
        <p><span>区块：<a>1282</a></span><span>输入/输出：<a>4/2</a></span><span>手续费:0.08769 NULS</span></p>
      </li>
      <li class="change-money">
        <p>转帐</p>
        <p><span><a>a46w5e4ra1s65df4a86df51a6sd4f56af56asd4fas4df5a64d</a></span><span>2018-02-03 19:30:26</span></p>
        <p><span>区块：<a>1282</a></span><span>输入/输出：<a>4/2</a></span><span>手续费:0.08769 NULS</span></p>
        <p><span><a>A2SD1F5A4A133SA54DF2A135FDA4</a></span><span><i
          class="nuls-img-icon nuls-img-right-action"></i></span><span><a>165aa4a5s6df4a8s5df4a5fas</a></span><span>0.072 NULS</span>
        </p>
        <p>
          <span><a>A2SD1F5A4A133SA54DF2A135FDA4</a></span><span></span><span><a>165aa4a5s6df4a8s5df4a5fas</a></span><span>0.072 NULS</span>
        </p>
        <p><span><a>A2SD1F5A4A133SA54DF2A135FDA4</a></span><span></span><span></span><span>0.072 NULS</span></p>
        <p><span>金额：0.07810676 NULS</span></p>
        <div class="list-foot"><a><i class="nuls-img-icon nuls-img-three-point"></i></a></div>
      </li>
    </ul>
  </div>

</template>

<script>
  import Head from "../components/Head";
  import Foot from "../components/Foot";

  export default {
    name: "transactionRecord",
    components: {Foot, Head}
  }

</script>

<style scoped>

</style>
