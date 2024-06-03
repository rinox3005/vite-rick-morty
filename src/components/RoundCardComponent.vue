<script>
export default {
  name: "RoundCardComponent",
  props: ["name", "image", "status", "species"],
};
</script>

<template>
  <div class="card-container">
    <img :src="image" alt="Immagine" />
    <h3>{{ name }}</h3>
    <p>{{ status }}</p>
    <p>{{ species }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: calc(100% / 4 - 20px);
  text-align: center;
  padding-bottom: 15px;
  img {
    border-radius: 50%;
  }
  h3 {
    padding-top: 10px;
    padding-bottom: 20px;
  }
  p {
    padding-bottom: 5px;
  }
}
</style>
