import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../assets/css/app.css"
import Router from 'vue-router'
import major from '@/pages/major';
import home from '@/pages/home';
import transactionList from '@/pages/transactionRecord'

Vue.use(ElementUI);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'major',
      component: major
      , children: [
        {path: "/", component: home}
        ,{path: "/index", component: home}
        ,{path: "/home", component: home}
        ,{path:"/transactionList",component:transactionList}
      ]
    }
  ]
})
