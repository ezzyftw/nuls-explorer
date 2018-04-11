module.exports = {
  title: 'NULS 区块链浏览器',
  nav: {
    index: '首页',
    rank: '排名',
    currencyAccount: '持币账户',
    outPieceAccount: '出块账户',
    tool: '工具',
    wallet: '钱包',
    clientDownloads: '客户端下载',
    webWallet: '网页轻钱包'
  },
  second: {
    index_NULS: 'NULS 全网信息',
    block: '区块',
    more: '更多',
    history: '14天NULS交易历史(K)',
    transaction: '交易',
    transactions: '笔交易',
    consensusReward: '共识奖励',
    enter: '输入',
    outPut: '输出',
    fee: '手续费',
    amount: '金额：',
    totalMortgage: '总抵押',
    consensusNodeAccount: '共识节点数量',
    consensusPeople: '共识参与人数',
    tokenCirculation: '代币发行量',
    dailyConsensusNodeReward: '24小时共识奖励',
    transList: '交易列表'
  },
  blockList: {
    blockList: '块列表',
    height: '高度',
    time: '时间',
    blockNodeName: '出块节点',
    transactionCount: '交易数量',
    size: '大小',
    blockReward: '块收益',
  },
  currencyAccount:{
    number: '序号',
    address: '地址',
    balance: '余额',
    transactionCount: '交易数量',
  },
  outPieceAccount:{
    number: '序号',
    address: '地址',
    blockReward: '块收益',
    reward: '收益',
    lastRewardBlock: '最后收获的区块 ',
    consensusStatus: '当前共识状态'
  },
  consensusNode:{
    consensusNode: '共识节点',
    accountInfo: '账户信息',
    blockAddress: '出块地址',
    nodeName: '节点名称',
    consensusStatus: '共识状态',
    blockCount: '出块数量',
    transactionCount: '交易数量',
    margin: '保证金',
    consensusFormatter:{
      i1: "等待共识",
      i2: "共识中",
      i0: "未知",
      inull: "未知",
    }
  },
  blockDetail: {
    blockDetail: '块详情',
    blockHash: '块哈希',
    confirmCount: '确认次数',
    transactionCount: '交易数量',
    transactionFee: '交易费用',
    blockNodeName: '出块节点',
    previousBlock: '上一个区块',
    nextBlock: '下一个区块'
  },
  transDetail: {
    transDetail: "交易详情",
    transType: "交易类型",
    transHash: "交易哈希",
    transHeight: "区块高度",
    transConfirmCount: "确认次数",
    transTime: "时间",
    transInput: "总输入",
    transOutput: "总输出",
    transFee: "手续费",
    transTypeDetail:{
      i1: "共识奖励",
      i2: "转账交易",
      i3: "锁仓交易",
      i4: "解锁交易",
      i5: "零钱换整",
      i11: "设置别名",
      i90: "注册共识",
      i91: "加入共识",
      i92: "退出共识",
      i93: "黄牌惩罚",
      i94: "红牌惩罚"
    },
  },
  page:{
    previous:'上一页',
    next: '下一页',
    goTo: '前往',
    total: '共',
    page: '页',
  },
  accountInfo: {
    accountInfo: '账户信息',
    address: '账户地址',
    canUseBalance: '可用余额',
    freezeBalance: '冻结金额',
    transactionCount: '交易数量',
  },
  notice: {
    noNet: '数据获取失败，请检查网络链接',
    notice: '提示',
    determine: '确定',
    noMessage: '暂无数据',
    searchFailed: '没有搜索到任何信息',
    searchNull: '请先输入搜索内容',
    consensusDetail: '共识节点详细数据获取失败',
    transCount: '交易量',
    transDate: '日期'
  },
  el: {
    pagination:{
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
  }
}
