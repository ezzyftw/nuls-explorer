export let nuls_server={
  nodeList:[
    {host:"http://192.168.1.233:8765"},
    {host:"http://192.168.1.201:8765"},
    {host:"http://192.168.1.203:8765"}
  ],
  requestMain: "/nuls"
};
export let nuls_defaultType={
  showError: false
};

export let nuls_api= {
  getbalance: "/report/balance",
  getTxByHash: "/tx/hash",
  getTxSpentHash: "/tx/hash/spent",
  getTxList: "/tx/list",
  getBlockByHash: "/block/hash",
  getBlockByHeight: "/block/height",
  getBlockBesthash: "/block/newest",
  getBlockList: "/block/list",
  getBlockHeaderByHash: "/block/header/hash",
  getBlockHeaderByHeight: "/block/header/height",
  getBlockListAddress: "/block/list/address",
  getAccount: "/account",
  getAllConsensus: "/consensus",
  getBalanceListRank: "/address/balancelist",
  getAddressMinedlist : "/address/minedlist",
  getAddressConsensuslist: "/address/consensuslist",
  getaddress: "/report/addresslist",
  getConsensusAgent: "/consensus/agent",
  getConsensusAgentList: "/consensus/agent/list",
  getTxhistory: "/txhistory",
  getSearchData: "/search",
  postBlockTest: "/block/test"
};

