export let nuls_server={
  n1:{host:"http://192.168.1.233:8765"},
  n2:{host:"http://192.168.1.201:8765"},
  n3:{host:"http://192.168.1.203:8765"}
}
export let nuls_defaultType={
  showError: false
}

export let nuls_api= {
  getbalance: "/nuls/report/balance",
  getTxByHash: "/nuls/tx/hash",
  getTxList: "/nuls/tx/list",
  getBlockByHash: "/nuls/block/hash",
  getBlockByHeight: "/nuls/block/height",
  getBlockBesthash: "/nuls/block/newest",
  getBlockList: "/nuls/block/list",
  getBlockHeaderByHash: "/nuls/block/header/hash",
  getBlockHeaderByHeight: "/nuls/block/header/height",
  getBlockListAddress: "/nuls/block/list/address",
  getAccount: "/nuls/account",
  getAllConsensus: "/nuls/consensus",
  getBalanceListRank: "/nuls/address/balancelist",
  getAddressMinedlist : "/nuls/address/minedlist",
  getAddressConsensuslist: "/nuls/address/consensuslist",
  getaddress: "/nuls/report/addresslist",
  getConsensusAgent: "/nuls/consensus/agent",
  getConsensusAgentList: "/nuls/consensus/agent/list",
  getTxhistory: "/nuls/txhistory",
  getSearchData: "/nuls/search",
  postBlockTest: "/nuls/block/test"
}

