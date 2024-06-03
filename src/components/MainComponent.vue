<script>
import CardsListComponent from "./CardsListComponent.vue";
import SearchBarComponent from "./SearchBarComponent.vue";
export default {
  name: "MainComponent",
  components: {
    CardsListComponent,
    SearchBarComponent,
  },
};
</script>

<template>
  <main>
    <SearchBarComponent />
    <CardsListComponent />
    <div class="resultsNum">Found 20 characters</div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  text-align: center;
  .resultsNum {
    padding-bottom: 30px;
    font-weight: 900;
  }
}
</style>
