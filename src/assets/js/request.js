import axios from 'axios';
import { nuls_server,nuls_defaultType } from "./config";

function e(){
  return {"success":arguments[0]||false,"code":arguments[1]||"","msg":arguments[2]||""};
}
function g(){
  return {"success":true,"code":10000,"msg":arguments[0]||""};
}
function v(p){
  return nuls_server.nodeList[0].host+nuls_server.requestMain+p;
}
export function m(url,callback,param){
  axios.get(v(url),{params:param||{}}).then(function (response){
    callback(response.data);
  }).catch(function (error) {
    callback(e(false,10002,nuls_defaultType.showError?error:"request failed"));
  });
}
export function n(url,callback,param){
  url = v(url);
  for (var i in param) {url += "/"+param[i];}
  axios.get(url).then(function (response){
    callback(response.data);
  }).catch(function (error) {
    callback(e(false,10002,nuls_defaultType.showError?error:"request failed"));
  });
}
export function o(url,callback,param){
  axios.post(v(url),param||{}).then(function (response){
    callback(response.data);
  }).catch(function (error) {
    callback(e(false,10002,nuls_defaultType.showError?error:"request failed"));
  });
}
