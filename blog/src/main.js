import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';
// import RouterHome from './components/RouterHome.vue';
// import RouterAbout from './components/RouterAbout.vue';

Vue.directive('size', {
  bind(el, binding) {
    if (binding.value === 'small') {
      el.style.fontSize = '20px';
    } else if (binding.value === 'big') {
      el.style.fontSize = '60px';
    } else {
      el.style.fontSize = '40px';
    }
  }
});

// Vue.use(VueRouter);

// const routes = [
//   { path: "/", component: RouterHome },
//   { path: "/about", component: RouterAbout }
// ];

// const router = new VueRouter({
//   routes
// });

Vue.filter("uCase", function (val) {
  return val.toUpperCase();
});

Vue.filter("cConvert", function (val) {
  return val * 75;
});

Vue.config.productionTip = false;

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app');
