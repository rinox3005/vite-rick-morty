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
    axios.get(store.apiUrl).then((response) => {
      this.store.results = response.data.results;
      this.store.info = response.data.info;
    });
  },
};
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style></style>
