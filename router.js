import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '~/pages/main/main.vue';
import page404 from '~/pages/404.vue';
import PostNav from '~/pages/post-navigation/post-navigation.vue';
import AboutUs from '~/pages/about-us/about-us.vue';
import Post from '~/pages/post/post.vue';
import WritePost from '~/pages/write-post/write-post.vue';

Vue.use(Router)



export function createRouter() {
  const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: MainPage
      },
      {
        path: '/post-navigation',
        component: PostNav
      },
      {
        path: '/about-us',
        component: AboutUs
      },
      {
        path: '/post',
        component: Post,
        props: (route) => ({
          query: route.query.id
        })
      },

      {
        path: '/write-post',
        component: WritePost
      },
      {
        path: '/404',
        name: '404',
        component: page404,
      }, {
        path: '*',
        redirect: '/404'
      }
    ]

  });
  return router;

}
