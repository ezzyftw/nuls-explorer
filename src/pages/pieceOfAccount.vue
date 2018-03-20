<template>
  <div class="nuls-content">
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>出块帐户</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <div class="nuls-title">
      出块帐户
    </div>
    <div>
      <ul class="nuls-ul-table">
        <li class="head">
          <span>序号</span>
          <span>地址</span>
          <span>收益块</span>
          <span>收益</span>
          <span>最后收获的区块</span>
          <span>当前共识状态</span>
        </li>
        <li class="content">
          <span>1</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>2</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>3</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>4</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>5</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>6</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>7</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
        </li>
        <li class="content">
          <span>8</span>
          <span><router-link to="/blockDetail">a5s45d6fas1df6a4fa5s31df5a6</router-link></span>
          <span>16820</span>
          <span>338,574,456</span>
          <span>392821</span>
          <span>共识中</span>
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
