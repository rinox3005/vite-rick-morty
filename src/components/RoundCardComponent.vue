<script>
export default {
  name: "RoundCardComponent",
};
</script>

<template>
  <div class="card-container">
    <img src="" alt="Immagine" />
    <h3>Nome</h3>
    <p>Status</p>
    <p>Race</p>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: calc(100% / 4);
  text-align: center;
}
</style>
