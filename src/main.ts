import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Collapse from '@/components/ui-library/Collapse.vue'

Vue.component('Collapse', Collapse)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
