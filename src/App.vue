<template>
  <SearchBar
    @ravelryQuery="(search, category) => searchRavelry(search, category)"
  />
  <ResultsList :results="results" />
  <h3>{{ error_message }}</h3>
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
      error_message: "",
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
      if (category === "yarns")
        try {
          this.results = YarnJsonCleaner(this.results.yarns);
          this.results = JsonCapitalizationHelper(this.results);
        } catch {
          this.results = "";
          this.error_message =
            "There is a problem on the back end. Makes sure the Rails app is running and has the correct auth codes.";
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
