<script>
import RoundCardComponent from "./RoundCardComponent.vue";
import { store } from "../store";
export default {
  name: "CardsListComponent",
  data() {
    return {
      store,
    };
  },
  components: {
    RoundCardComponent,
  },
};
</script>

<template>
  <div class="container">
    <RoundCardComponent
      v-for="character in store.results"
      :name="character.name"
      :image="character.image"
      :status="character.status"
      :species="character.species"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 80%;
  margin: 20px auto;
}
</style>
