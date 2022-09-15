<template>
    <div :class="[$style.container]">
        <div :class="$style.items_row">
            <div :class="$style.item_number">#</div>
            <div :class="$style.item_date">Date</div>
            <div :class="$style.item_category">Category</div>
            <div :class="$style.item_value">Value</div>
        </div>
        <ul :class="$style.items_box">
            <li :class="$style.items_row"
            v-for="(item, index) of list"
             :key="index">
            <div :class="$style.item_number">{{ index+1 }}</div>
            <div :class="$style.item_date">{{ item.date }}</div>
            <div :class="$style.item_category">{{ item.category }}</div>
            <div :class="$style.item_value">{{ item.value }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'renderList',
  props: {
    expensesList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.$store.getters.GET_PAYMENT_LIST
  }
}
</script>

<style module lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        margin: 0 auto;
        max-width: 1400px;
        flex-direction: column;
    }
    .items_row{
        display: flex;
        justify-content: space-between;
        widows: 1000px;
        padding-bottom: 30px;
    }
    .item_number{
        width: 10%;
    }
    .item_date{
        width: 30%;
    }
    .item_category{
        width: 30%;
    }
    .item_value{
        width: 30%;
    }
</style>
