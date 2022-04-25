<template>
  <p v-for="item in results" v-bind:key="item.id">
    <ResultCard :item="item" />
  </p>
</template>

<script>
import ResultCard from "./ResultCard.vue";
export default {
  props: {
    results: String,
  },
  components: {
    ResultCard,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
