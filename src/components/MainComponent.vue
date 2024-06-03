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
    <CardsListComponent v-if="store.results.length === 20" />
    <LoadingComponent v-else />
    <div class="resultsNum" v-show="store.results.length === 20">
      Found 20 characters
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
