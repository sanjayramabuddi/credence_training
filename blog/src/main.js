import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("uCase", function(val){
  return val.toUpperCase();
})

Vue.filter("cConvert", function(val){
  return val*75;
})

new Vue({
  render: h => h(App),
}).$mount('#app')