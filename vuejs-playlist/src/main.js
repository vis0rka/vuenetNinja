import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export const bus = new Vue();

Vue.use(VueResource);

//custom directives global

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "600px";
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

//filters global

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
