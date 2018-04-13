export function formatTxStatus(status){
  switch (status){
    case 1:
      return "共识奖励";
    case 2:
      return "转账交易";
    case 3:
      return "锁仓交易";
    case 4:
      return "解锁交易";
    case 5:
      return "零钱换整";
    case 11:
      return "设置别名";
    case 90:
      return "注册共识";
    case 91:
      return "加入共识";
    case 92:
      return "退出共识";
    case 93:
      return "黄牌惩罚";
    case 94:
      return "红牌惩罚";
    default:
      return "未知";
  }
};
export function formatTxClass(status){
  switch (status){
    case 1:
      return "consensus-reward";
    case 2:
      return "tokens-trading";
    case 3:
      return "change-money";
    case 4:
      return "change-money";
    case 5:
      return "change-money";
    case 11:
      return "set-alias";
    case 90:
      return "consensus-building";
    case 91:
      return "entrust-consensus";
    case 92:
      return "stop-consensus";
    case 93:
      return "yellow-card";
    case 94:
      return "red-card";
    default:
      return "未知";
  }
};
export function formatConsensusStatus(status){
  switch (status){
    case 0:
      return "未参与共识";
    case 1:
      return "等待共识";
    case 2:
      return "共识中";
    default:
      return "未知";
  }
}
export function formatUTXOStatus(status){
  switch (status){
    case 0:
      return "Unspent";
    case 1:
      return "Locked";
    case 2:
      return "Locked";
    case 3:
      return "Spent";
    default:
      return "Unknown";
  }
}
export function formatUTXOClass(status){
  return status==3?"pointer baseColor":"enableColor";
}
export function formatTxtatus(status){
  switch (status){
    case 0:
      return "待确认";
    case 1:
      return "已确认";
    default:
      return "未知";
  }
}
export function formatString(str){
  return str.substring(0,4)+"...."+str.substring(str.length-4,str.length);
};
export function getInfactCoin(count){
  var m=0,s1=count.toString(),s2="0.00000001";
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  var total = (Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)).toString();
  return total.split('.')[1]?total.split('.')[1].length==1? total+"0":total:total+".00";
};
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
