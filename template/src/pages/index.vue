<template>
  <div class="count" @click="$store.commit('INCREMENT')">
    {{ count }}
  </div>
</template>

<script>
  export default {
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
  }
</style>
