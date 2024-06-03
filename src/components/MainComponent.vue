<script>
import CardsListComponent from "./CardsListComponent.vue";
export default {
  name: "MainComponent",
  components: {
    CardsListComponent,
  },
};
</script>

<template>
  <main>
    <div>SearchBar</div>
    <CardsListComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
