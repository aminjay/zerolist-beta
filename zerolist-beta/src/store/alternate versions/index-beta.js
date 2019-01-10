import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

import vuexEasyFirestore from 'vuex-easy-firestore'

Vue.use(Vuex)

const STORAGE_KEY2 = 'settings-zerolist'

const todoModule = {
  firestorePath: 'users/{userId}/todos', // your path of firestore
  firestoreRefType: 'collection',
  moduleName: 'todos',
  statePropName: 'data',
  mutations: {}, // use vuex easy firestore actions instead
  actions: {
    // addTodo, removeTodo, toggleTodo, editTodo
    // ↳ use vuex easy firestore actions instead
    toggleAll ({ state, dispatch }, done) {
      Object.values(state.data).forEach((todo) => {
        dispatch('set', {id: todo.id, done})
      })
    },
    clearCompleted ({ state, dispatch }) {
      Object.values(state.data)
        .forEach(todo => {
          if (!todo.done) return
          dispatch('delete', todo.id)
        })
    }
  }
}

const easyFirestoreTodoModule = vuexEasyFirestore(todoModule, {logging: true})

export const store = new Vuex.Store({
  state: {
    appTitle: 'Zerolist',
    settings: JSON.parse(window.localStorage.getItem(STORAGE_KEY2) || '[]')
  },
  getters: {},
  modules: { user },
  plugins: [ easyFirestoreTodoModule ]
})
