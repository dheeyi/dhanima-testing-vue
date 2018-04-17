import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
      {id: 4, name: 'Sven', registered: false},
      {id: 5, name: 'William', registered: false},
      {id: 6, name: 'Simon', registered: false},
      {id: 7, name: 'Michelle', registered: false}
    ]
  },
  getters: {
    unregisteredUsers (state) {
      return state.users.filter(user => {
        return !user.registered
      })
    },
    registrations (state) {
      return state.registrations
    },
    totalRegistrations (state) {
      return state.registrations.length
    }
  },
  mutations: {
    register (state, userId) {
      let date = new Date()
      let user = state.users.find(user => {
        return user.id === userId
      })
      user.registered = true
      let registration = {
        userId: userId,
        name: user.name,
        date: date.getMonth() + '/' + date.getDay()
      }
      state.registrations.push(registration)
    },
    unregister (state, payload) {
      let user = state.users.find(user => {
        return user.id === payload.userId
      })
      user.registered = false
      let registration = state.registrations.find(registration => {
        return registration.userId === payload.userId
      })
      state.registrations.splice(state.registrations.indexOf(registration), 1)
    }
  },
  actions: {
    register ({ commit }, userId) {
      return new Promise(resolve => {
        commit('register', userId)
        resolve()
      })
    }
  }
})

export default store
