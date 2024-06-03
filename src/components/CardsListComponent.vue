<script>
import RoundCardComponent from "./RoundCardComponent.vue";
export default {
  name: "CardsListComponent",
  components: {
    RoundCardComponent,
  },
};
</script>

<template>
  <div class="container">
    <RoundCardComponent />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 20px;
}
</style>
