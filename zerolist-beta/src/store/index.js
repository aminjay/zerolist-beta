import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

const STORAGE_KEY = 'todos-zerolist'
const STORAGE_KEY2 = 'settings-zerolist'

export const store = new Vuex.Store({
  state: {
    appTitle: 'Zerolist (BETA)',
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    settings: JSON.parse(window.localStorage.getItem(STORAGE_KEY2) || '[]')
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    editTodo (state, { todo, text = todo.text, done = todo.done }) {
      todo.text = text
      todo.done = done
    }
  },

  actions: {
    addTodo ({ commit }, text) {
      commit('addTodo', {
        uid: Date.now(),
        text,
        done: false
      })
    },
    removeTodo ({ commit }, todo) {
      commit('removeTodo', todo)
    },
    toggleTodo ({ commit }, todo) {
      commit('editTodo', { todo, done: !todo.done })
    },
    editTodo ({ commit }, { todo, value }) {
      commit('editTodo', { todo, text: value })
    },
    toggleAll ({ state, commit }, done) {
      state.todos.forEach((todo) => {
        commit('editTodo', { todo, done })
      })
    },
    clearCompleted ({ state, commit }) {
      state.todos.filter(todo => todo.done)
        .forEach(todo => {
          commit('removeTodo', todo)
        })
    }
  },

  getters: {},

  plugins: [store => {
    store.subscribe((mutation, { todos, settings }) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      window.localStorage.setItem(STORAGE_KEY2, JSON.stringify(settings))
    })
  }],

  modules: {
    user
  }
})
