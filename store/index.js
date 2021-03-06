import Vue from 'vue'
import Api from "~/assets/js/api/fetch.js";
const CONSTS = require("~/assets/js/frontend.consts.js");
export const getters = {
  // ...
  /* randPostId: async function (state, getters) {
     const id = await Api.GetReq(CONSTS.PATHS.GETRANDPOST, {});
     console.log('rand')
     return '/' + id;
   }*/
}
export const state = () => ({
  menuArr: [{
      text: "Главная",
      path: "/",
      active: false
    },
    {
      text: "Статья",
      path: "#",
      tooltip: "Нажав на этот раздел, вы будете переадресованы <br>на случайную статью сайта",
      active: false
    },
    {
      text: "Теги",
      path: "post-navigation",
      active: false
    },
    {
      text: "О нас",
      path: "about-us",
      active: false
    },
  ],
});

export const mutations = {
  activeMenu(state, menu) {
    state.menuArr.forEach(it => it.active = false);
    if (!menu.start) {
      Vue.set(state.menuArr[menu], "start", true);
    }
    Vue.set(state.menuArr[menu], "active", true);
  },
  randPost(state, id) {
    Vue.set(state.menuArr[1], 'path', {
      path: 'post',
      query: {
        id: id
      }
    });
  }
};
export const actions = {
  activeMain({
    commit
  }) {
    commit('activeMenu', 0);
  },
  activeTags({
    commit
  }) {
    commit('activeMenu', 2);
  },
  activePost({
    commit
  }) {
    commit('activeMenu', 1);
  },

  activeAbout({
    commit
  }) {
    commit('activeMenu', 3);
  },
  async randPost({
    commit
  }) {
    const id = await Api.GetReq(CONSTS.PATHS.GETRANDPOST, {});
    commit('randPost', id);
    return id;
  }
};
