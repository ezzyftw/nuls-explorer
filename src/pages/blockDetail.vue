<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/blockList' }">块列表</el-breadcrumb-item>
        <el-breadcrumb-item>块详情</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>

    <div class="nuls-title nuls-block-detail-title">
      块8886
      <div class="nuls-block-operation-box clearfix">
        <a class="float_left nuls-buttom">上一个块</a>
        <a class="float_right nuls-buttom">下一个块</a>
      </div>
    </div>
    <ul class="tx_description tx_border tx_background">
      <li><span class="float_left">块Hash</span><span class="float_right">转账</span></li>
      <li><span class="float_left">交易哈希</span><a href="/" class="float_right">0xf20255f9b5c0545029d7313f9b5c05450290247ed3ade7cb</a></li>
      <li><span class="float_left">区块高度</span><a href="/" class="float_right">110</a></li>
      <li><span class="float_left">确认次数</span><span class="float_right">109</span></li>
      <li><span class="float_left">时间</span><span class="float_right">2018-02-27 19:06:04</span></li>
      <li><span class="float_left">确认时间</span><span class="float_right">0.712秒</span></li>
      <li><span class="float_left">总输入</span><span class="float_right">0.1958 NULS</span></li>
      <li><span class="float_left">总输出</span><span class="float_right">0.19347 NULS</span></li>
      <li><span class="float_left">手续费</span><span class="float_right">0.00233 NULS</span></li>
    </ul>
    <div class="segmentation">
      <i class="nuls-img-icon nuls-img-transaction"></i><span>68笔交易</span>
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
    <div class="text-align-right">
      <el-pagination
        background
        prev-text="上一页"
        next-text="下一页"
        layout="total,prev, pager, next,jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blockDetail"
    }
</script>

<style scoped>

</style>
