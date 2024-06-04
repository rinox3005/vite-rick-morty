<script>
export default {
  name: "SearchBarComponent",
  props: ["store"],
  emits: ["search"],
  methods: {
    resetSearch() {
      this.store.searchStatus = "";
      this.store.searchName = "";
      this.$emit("search");
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search character"
      v-model="store.searchName"
    />
    <select name="status" id="status" v-model="store.searchStatus">
      <option value="" disabled selected hidden>Select status</option>
      <option value="dead">Dead</option>
      <option value="alive">Alive</option>
      <option value="unknown">Unknown</option>
    </select>
    <button class="search-btn" @click="$emit('search')">Search</button>
    <button class="reset-btn" @click="resetSearch">Reset</button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  padding-bottom: 20px;
  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(163, 163, 163);
  }
  select {
    padding: 5px;
    margin-left: 15px;
    background-color: #ffffff;
    border: 1px solid rgb(163, 163, 163);
    border-radius: 5px;
  }
  button {
    padding: 7px 10px;
    margin-left: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
.search-btn {
  background-color: #0a6efd;
  color: #ffffff;
  &:hover {
    background-color: #0452c0;
  }
}

.reset-btn {
  background-color: #ffc106;
  &:hover {
    background-color: #c79709;
  }
}
</style>
