import VueRouter from 'vue-router';

import Search from './components/Search.vue';
import NotFound from './components/pages/NotFound.vue';
import Movie from './components/Movie.vue';
// import Trending from './components/pages/Trending.vue'

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: 'Search'
      }
    },
    {
      path: '/movies?',
      component: Search,
      name: 'Search'
    },
    {
      path: '/movies/movie?',
      component: Movie,
      name: 'Movie'
    },
    // {
    //   path: '/trending',
    //   component: Trending,
    //   name: 'Trending'
    // },
    {
      path: '*',
      component: NotFound,
      props: {
        msg: 'cannot find the page'
      }
    }
  ]
})