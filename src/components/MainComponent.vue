<script>
import CardsListComponent from "./CardsListComponent.vue";
import SearchBarComponent from "./SearchBarComponent.vue";
import LoadingComponent from "./LoadingComponent.vue";
import { store } from "../store";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
  components: {
    CardsListComponent,
    SearchBarComponent,
    LoadingComponent,
  },
};
</script>

<template>
  <main>
    <SearchBarComponent />
    <LoadingComponent v-if="this.store.loading" />
    <CardsListComponent v-else />
    <div class="resultsNum" v-show="!this.store.loading">
      Showing {{ store.results.length }} characters out of
      {{ store.info.count }} found
    </div>
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
