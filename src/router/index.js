import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main/Main'
import Recommend from '../components/recommend/Recommend'
import Rank from '../components/rank/Rank'
import Searchsing from '../components/searchsing/Searchsing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
       path: '/recommend',
       name: "Recommend",
       component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/searchsing',
      name:'Searchsing',
      component: Searchsing
    }
  ]
})
