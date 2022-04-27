<template>
  <div class="container">
    <div class="card">
      <h3>{{ item.Name }}</h3>
      <button ref="toggleShowInfo" @click="expandOrCollapse">Expand</button>

      <div ref="cardContent" class="contentContainer">
        <YarnCardInfo :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import YarnCardInfo from "./YarnCardInfo.vue";
export default {
  props: {
    item: String,
  },
  components: {
    YarnCardInfo,
  },
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    expandOrCollapse: function () {
      this.show = !this.show;
      this.$refs.toggleShowInfo.innerHTML = this.show ? "Hide" : "Expand";
      this.$refs.cardContent.style.display = this.show ? "inline" : "none";
    },
  },
};
</script>

<style scoped>
.card {
  background-color: aliceblue;
  border: 2px solid black;
  width: 50%;
  text-align: center;
  padding-bottom: 10px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contentContainer {
  display: none;
  margin: 5px;
}

button {
  background-color: white;
}
</style>
