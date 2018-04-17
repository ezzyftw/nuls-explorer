import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import '../assets/css/app.css'
import Router from 'vue-router'
import major from '@/pages/major'
import home from '@/pages/home'
import transactionRecord from '@/pages/transactionRecord'
import blockList from '@/pages/blockList'
import transactionHash from '@/pages/transactionHash'
import blockDetail from '@/pages/blockDetail'
import pieceOfAccount from '@/pages/pieceOfAccount'
import accountInfo from '@/pages/accountInfo'
import consensusNode from '@/pages/consensusNode'
import cashAccount from '@/pages/cashAccount'
import notFond from '@/pages/notFond'
import loadSearch from '@/pages/loadSearch'


Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'major',
      component: major,
      children: [
        {path: "/", component: home},
        {path: "/index", component: home},
        {path: "/home", component: home},
        {path: "/transactionRecord", component: transactionRecord},
        {path: "/blockList", component: blockList},
        {path: "/transactionHash", component: transactionHash},
        {path: "/blockDetail", component: blockDetail},
        /*{path: "/blockDetail:height",name:"/blockDetail", component: blockDetail},*/
        {path: "/pieceOfAccount", component: pieceOfAccount},
        {path: "/accountInfo", component: accountInfo},
        {path: "/consensusNode", component: consensusNode},
        {path: "/cashAccount", component: cashAccount},
        {path: "/loadSearch", component: loadSearch},
      ]
    },
    {path: "/notFond", component: notFond},
    {path: "*",component: notFond }
  ]
  ,scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
