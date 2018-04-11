import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale:"zh",
  messages:{
    "zh":require("./assets/js/language_zh.js"),
    "en":require("./assets/js/language_en.js")
  },
});

Vue.use(ElementUI,{
  i18n:(key,value) =>i18n.t(key,value)
});

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

