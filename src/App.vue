<template>
  <SearchBar
    @ravelryQuery="(search, category) => searchRavelry(search, category)"
  />
  <ResultsList :results="results" />
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ResultsList from "./components/ResultsList.vue";
import RavelryQuery from "./helpers/RavelryQuery.js";

export default {
  data() {
    return {
      results: "Results Will Appear Here",
    };
  },
  name: "App",
  components: {
    SearchBar,
    ResultsList,
  },
  methods: {
    async searchRavelry(message, category) {
      this.results = await RavelryQuery(message, category);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
