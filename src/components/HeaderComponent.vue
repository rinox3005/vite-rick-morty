<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header>
    <h1>Rick and Morty App</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  h1 {
    font-size: 35px;
    font-weight: 900;
    padding-top: 25px;
  }
}
</style>
