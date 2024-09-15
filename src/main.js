import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'//rem转换器
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'
import VueLazyload from 'vue-lazyload'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
import './assets/font/font.css'
Vue.use(Toast);

Vue.use(Vant);
Vue.use(VueLazyload)
// 配置项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

Vue.use(VueI18n)
Vue.use(ElementUI);

const i18n = new VueI18n({
  locale: 'zh',    // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),   // 通过require引入中文语言包
    'en': require('./assets/lang/en')    // 通过require引入英文语言包
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
