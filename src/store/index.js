import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const paymentList = [
  { id: '1', date: '20.03.2020', category: 'Food', value: '169' },
  { id: '2', date: '21.03.2020', category: 'Navigation', value: '50' },
  { id: '3', date: '22.03.2020', category: 'Sport', value: '450' },
  { id: '4', date: '23.03.2020', category: 'Entertaiment', value: '969' },
  { id: '5', date: '24.03.2020', category: 'Education', value: '1500' },
  { id: '6', date: '25.03.2020', category: 'Food', value: '200' }
]

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListPage: []
  },
  getters: {
    GET_PAYMENT_LIST: state => state.paymentsList
  },
  mutations: {
    SET_PAYMENT_LIST (state, list) {
      state.paymentsList = list
    },
    SET_NEW_PAYMENT (state, data) {
      state.paymentsList.push(data)
    }
  },
  actions: {
    getPaymentList ({ commit }) {
      const getPaymentsList = paymentList
      commit('SET_PAYMENT_LIST', getPaymentsList)
    }
  },
  modules: {
  }
})
