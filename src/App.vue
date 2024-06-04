<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

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
};
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>

<style></style>
