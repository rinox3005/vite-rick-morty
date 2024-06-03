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
  margin: 0 auto;
  text-align: center;
}
</style>
