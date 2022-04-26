<template>
  <div class="container">
    <div class="card">
      <h3>{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
  },
  data: function () {
    return {
      show: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: aliceblue;
  border: 2px solid black;
  width: 50%;
  text-align: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
