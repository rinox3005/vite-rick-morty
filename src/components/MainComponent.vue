<script>
import CardsListComponent from "./CardsListComponent.vue";
import SearchBarComponent from "./SearchBarComponent.vue";
import LoadingComponent from "./LoadingComponent.vue";
import PageNavComponent from "./PageNavComponent.vue";
import axios from "axios";
import { store } from "../store";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
  created() {
    this.apiCall();
  },
  methods: {
    apiCall() {
      this.store.loading = true;

      const params = {};

      if (this.store.searchStatus || this.store.searchName) {
        params.name = this.store.searchName;
        params.status = this.store.searchStatus;
      }

      axios.get(store.apiUrl, { params }).then((response) => {
        this.store.results = response.data.results;
        this.store.info = response.data.info;
        setTimeout(this.testSearchComplete, 500);
        // if (response.status === 404) {
        //   this.store.foundCards = false;
        // }
      });
    },
    testSearchComplete() {
      return (this.store.loading = false);
    },
  },
  components: {
    SearchBarComponent,
    LoadingComponent,
    CardsListComponent,
    PageNavComponent,
  },
};
</script>

<template>
  <main>
    <SearchBarComponent :store="this.store" @search="apiCall" />
    <PageNavComponent @search="apiCall" />
    <LoadingComponent v-if="this.store.loading" />
    <CardsListComponent v-else />
    <div class="resultsNum" v-show="!this.store.loading">
      Showing {{ store.results.length }} characters out of
      {{ store.info.count }} found
    </div>
    <PageNavComponent v-if="!this.store.loading" @search="apiCall" />
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 30px auto;
  text-align: center;

  .resultsNum {
    padding-bottom: 30px;
    font-weight: 900;
  }
}
</style>
