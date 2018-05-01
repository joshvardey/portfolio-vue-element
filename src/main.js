import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/element-green/index.css';
import App from './App.vue'
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = false

const vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')