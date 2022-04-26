<template>
  <input v-model="search" />
  <div class="buttons">
    <button ref="searchbutton" @click="$emit('ravelryQuery', search, category)">
      Search
    </button>
  </div>
  <div>{{ results }}</div>
</template>

<script>
const axios = require("axios").default;
export default {
  emits: ["ravelryQuery"],
  data() {
    return {
      search: "",
      results: "",
      category: "yarns",
    };
  },
  methods: {
    searchRavelry() {
      const url = "http://127.0.0.1:3000/api/yarns.json?query=" + this.search;
      axios.get(url).then((response) => (this.results = response.data));
    },
  },
};
</script>

<style scoped></style>
