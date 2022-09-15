<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RenderList :expensesList="expensesList"/>
    <MyPagination/>
    <button @click="show=!show">ADD NEW COST</button>
    <AddExpenses v-show="show"
     @newPaymant = "newPaymant"/>
  </div>
</template>

<script>
import RenderList from './components/RenderList.vue'
import AddExpenses from './components/AddExpenses.vue'
import MyPagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    RenderList,
    AddExpenses,
    MyPagination
  },
  data () {
    return {
      expensesList: [],
      show: false
    }
  },
  methods: {
    newPaymant (data) {
      this.expensesList.push(data)
    }
  },
  created () {
    this.$store.dispatch('getPaymentList')

    // this.expensesList = this.fetchData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
