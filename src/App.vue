<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";
import { store } from "./store";
export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
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

      axios.get(store.apiUrl).then((response) => {
        this.store.results = response.data.results;
        this.store.info = response.data.info;
        setTimeout(this.testSearchComplete, 1000);
      });
    },
    testSearchComplete() {
      return (this.store.loading = false);
    },
  },
};
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style></style>
