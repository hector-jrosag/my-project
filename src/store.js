import Vuex from 'vuex';

// En el video: import Vue from 'vue' + Vue.use(Vuex) (sintaxis de Vue 2).
// En Vue 3 eso falla; el store se registra en main.js con .use(store).

export default new Vuex.Store({
    state: {
        message: 'Hello World with Vuex!'
    },
      mutations: {
        setMessage(state, newMessage) {
          state.message = newMessage;
        }
      }

});
