<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>块列表</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="nuls-title">
      块列表
    </div>
    <div>
      <ul class="nuls-ul-table">
        <li class="head">
          <span>高度</span>
          <span>时间</span>
          <span>交易数量</span>
          <span>出块节点</span>
          <span>大小(byte)</span>
          <span>块收益</span>
        </li>
        <li class="content">
          <span><router-link to="/blockDetail">5170115</router-link></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><router-link to="/transactionHash">Ehtermine</router-link></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
          <span>800,000</span>
          <span>30.13123 NULS</span>
        </li>
        <li class="content">
          <span><a>5170115</a></span>
          <span>2018-03-02 12:32:12</span>
          <span>16820</span>
          <span><a>Ehtermine</a></span>
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
  </div>
</template>

<script>
  export default {
    name: "blockList"
  }
</script>

<style scoped>

</style>
