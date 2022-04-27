<template>
  <div class="yarnCardInfo">
    <div v-for="(value, key) in item" v-bind:key="key">
      {{ key }} : {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
  },
};
</script>

<style scoped></style>
