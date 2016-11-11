<template>
  <div class="count" @click="$store.commit('INCREMENT')">
    {{ count }}
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    preFetch(store) {
      return store.dispatch('incrementAsync')
    },
    computed: {
      ...mapState(['count'])
    }
  }
</script>

<style>
  .count {
    margin: 100px auto;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 3px;
    cursor: pointer;
    user-select: none;
    font-size: 30px;
  }
</style>
