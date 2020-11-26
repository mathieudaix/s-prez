import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Article from './views/Article.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: Article },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
