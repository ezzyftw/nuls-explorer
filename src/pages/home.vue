<template>
  <div class="nuls-home-content ">
    <div class="nuls-home-content-head clearfix">
      <div class="nuls-home-content-head-left clearfix">
        <div class="nuls-home-content-head-left-head">
          <div>
            <span><i class="nuls-img-icon nuls-img-consensus"></i></span><label>NULS全网信息</label>
          </div>
        </div>
        <div class="nuls-infomation-box entireNetworkInfomation">
          <div class="nuls-block-box nuls-table">
            <div class="nuls-table-row">
              <div class="nuls-table-cell">最新区块</div>
              <div class="nuls-table-cell text-align-right">518,976</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">共识节点数量</div>
              <div class="nuls-table-cell text-align-right">2,688</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">共识参与人数</div>
              <div class="nuls-table-cell text-align-right">8,888</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">代币发行量</div>
              <div class="nuls-table-cell text-align-right">1亿</div>
            </div>
            <div class="nuls-table-row">
              <div class="nuls-table-cell">当前代币数量</div>
              <div class="nuls-table-cell text-align-right">5,000,000</div>
            </div>
          </div>
          <div class="nuls-block-box nuls-transaction-history"></div>
        </div>

      </div>
      <div class="nuls-home-content-head-right clearfix">
        <div class="nuls-home-content-head-left-head">
          <div class="clearfix">
            <span><i class="nuls-img-icon nuls-img-block"></i></span><label>区块</label><router-link to="">更多</router-link>
          </div>
        </div>
        <div class="nuls-infomation-box blockInfomation">
          <ul class=" nuls-block-list">
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
            <li>
              <div>
                <div class="nuls-table-cell">区块<span>8666</span></div>
                <div class="nuls-table-cell text-align-right">2018-02-17 19:06:04</div>
              </div>
              <div>
                <div class="nuls-table-cell">出块节点<span>NETER</span></div>
                <div class="nuls-table-cell">67笔交易</div>
                <div class="nuls-table-cell text-align-right">200.00 NULS</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nuls-transaction-container">
      <div class="nuls-transaction-head clearfix"><span><i
        class="nuls-img-icon nuls-img-block"></i></span><label>交易</label><router-link to="transactionList">更多</router-link></div>
      <ul class="nuls-transaction-list">
        <li class="yellow-card">
          <p>转帐</p>
          <p><span><a>a46w5e4ra1s65df4a86df51a6sd4f56af56asd4fas4df5a64d</a></span><span>2018-02-03 19:30:26</span></p>
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>
