module.exports = {
  title: 'NULS BlockChain Explorer and Search',
  nav: {
    index: 'Home',
    rank: 'Rank',
    currencyAccount: 'Currency',
    outPieceAccount: 'Out',
    tool: 'Tool',
    wallet: 'Wallet',
    clientDownloads: 'Client',
    webWallet: 'Web'
  },
  second: {
    index_NULS: 'NULS full network information',
    block: 'Block',
    more: 'More',
    history: '14 days trading history',
    transaction: 'Transaction',
    transactions: 'Transactions',
    consensusReward: 'Consensus reward',
    enter: 'Input',
    outPut: 'Output',
    fee: 'Fee',
    amount: 'Amount: ',
    totalMortgage: 'Mortgage',
    consensusNodeAccount: 'Consensus count',
    consensusPeople: 'Consensus people',
    tokenCirculation: 'Token circulation',
    dailyConsensusNodeReward: 'Daily consensus reward',
    transList: 'Transactions',
  },
  blockList: {
    blockList: 'Block List',
    height: 'Height',
    time: 'Time',
    blockNodeName: 'Block name',
    transactionCount: 'Transaction Count',
    size: 'Size',
    blockReward: 'Block reward',
  },
  currencyAccount:{
    number: 'No.',
    address: 'Address',
    balance: 'Balance',
    transactionCount: 'Transaction count',
  },
  outPieceAccount:{
    number: 'No.',
    address: 'Address',
    blockReward: 'Block reward',
    reward: 'Reward',
    lastRewardBlock: 'Last reward block ',
    consensusStatus: 'Consensus status'
  },
  consensusNode:{
    consensusNode: 'Consensus node',
    accountInfo: 'AccountInfo',
    blockAddress: 'Block address',
    nodeName: 'Node name',
    consensusStatus: 'Consensus Status',
    blockCount: 'Out block Count',
    transactionCount: 'Transaction count',
    margin: 'Margin',
    consensusFormatter:{
      i1: "Waiting for consensus",
      i2: "Consensus",
      i0: "Not join",
      inull: "unknown",
    }
  },
  blockDetail: {
    blockDetail: 'Block detail',
    blockHash: 'Block aash',
    confirmCount: 'Confirm count',
    transactionCount: 'Transaction count',
    transactionFee: 'Transaction fee',
    blockNodeName: 'Block',
    previousBlock: 'Previous block',
    nextBlock: 'Next block'
  },
  transDetail: {
    transDetail: "Detail",
    transType: "Type",
    transHash: "Hash",
    transHeight: "Height",
    transConfirmCount: "Confirm count",
    transTime: "Time",
    transInput: "Inputs",
    transOutput: "Outputs",
    transFee: "Fee",
    transTypeDetail:{
      i1: "Consensus reward",
      i2: "Transfer transactions",
      i3: "Lock transaction",
      i4: "Unlock transaction",
      i5: "Change",
      i11: "Set up an alias",
      i90: "Registration consensus",
      i91: "Join consensus",
      i92: "Withdraw from the consensus",
      i93: "Yellow card penalty",
      i94: "Red card penalty",
      i95: "Stop consensus"
    },
  },
  page:{
    previous:'Previous',
    next: 'Next',
    goTo: 'GO',
    total: 'Total',
    page: 'Page',
  },
  accountInfo: {
    accountInfo: 'AccountInfo',
    address: 'address',
    canUseBalance: 'Can use balance',
    freezeBalance: 'Freeze balance',
    transactionCount: 'Transaction count',
  },
  notice: {
    noNet: 'Data acquisition failed, please check the web link',
    notice: 'Notice',
    determine: 'Determine',
    noMessage: 'No message',
    noBlockMessage: 'No Block Message',
    noTransMessage: 'No Trans Message',
    searchFailed: 'No information found',
    searchNull: 'Please enter search content first',
    consensusDetail: 'Consensus node details data acquisition failed',
    transCount: 'Trans count',
    transDate: 'Date'
  },
  el: {
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: ''
    },
    messagebox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
      error: 'Illegal input'
    },
  }
}
