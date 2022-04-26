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
import JsonCapitalizationHelper from "./helpers/JsonCapitalizationHelper.js";
import YarnJsonCleaner from "./helpers/YarnJsonCleaner.js";

export default {
  data() {
    return {
      results: "",
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
      if (category === "yarns") {
        this.results = YarnJsonCleaner(this.results.yarns);
        this.results = JsonCapitalizationHelper(this.results);
      }
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
