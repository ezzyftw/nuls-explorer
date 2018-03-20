<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/blockList' }">块列表</el-breadcrumb-item>
        <el-breadcrumb-item>交易Hash</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title">
      交易Hash
    </div>

    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">交易类型</span><span class="float_right">转账</span></li>
      <li><span class="float_left">交易哈希</span><a href="/" class="float_right">0xf20255f9b5c0545029d7313f9b5c05450290247ed3ade7cb</a></li>
      <li><span class="float_left">区块高度</span><a href="/" class="float_right">110</a></li>
      <li><span class="float_left">确认次数</span><span class="float_right">109</span></li>
      <li><span class="float_left">时间</span><span class="float_right">2018-02-27 19:06:04</span></li>
      <li><span class="float_left">确认时间</span><span class="float_right">0.712秒</span></li>
      <li><span class="float_left">总输入</span><span class="float_right">0.1958 NULS</span></li>
      <li><span class="float_left">总输出</span><span class="float_right">0.19347 NULS</span></li>
      <li><span class="float_left">手续费</span><span class="float_right">0.00233 NULS</span></li>
    </ul>
    <div class="tx_list">
      <div class="w49 float_left tx_background">
        <div class="tx_head">输入</div>
        <ul class="tx_description">
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
        </ul>
      </div>
      <div class="w49 float_right tx_background">
        <div class="tx_head">输出</div>
        <ul class="tx_description">
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
          <li><a href="#" class="float_left">1QAoXqcgMNMkmzEzoHFwFaDXtrm5PMuNCR</a><span class="float_right">（0.09&nbsp;-&nbsp;<a href="#">Output</a>）</span></li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "transactionHash"
    }
</script>

<style scoped>

</style>
