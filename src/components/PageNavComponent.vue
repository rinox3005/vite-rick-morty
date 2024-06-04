<script>
import { store } from "../store";
export default {
  name: "PageNavComponent",
  emits: ["search"],
  data() {
    return {
      store,
    };
  },
  methods: {
    nextPage() {
      if (this.store.info.next) {
        this.store.apiUrl = this.store.info.next;
        this.$emit("search");
      }
    },
    prevPage() {
      if (this.store.info.prev) {
        this.store.apiUrl = this.store.info.prev;
        this.$emit("search");
      }
    },
  },
};
</script>

<template>
  <button @click="prevPage()">&#60; Prev</button>
  <button @click="nextPage()">Next &#62;</button>
</template>

<style lang="scss" scoped>
button {
  padding: 7px 10px;
  margin-left: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #0a6efd;
  color: #ffffff;
  &:hover {
    background-color: #0452c0;
  }
}

input {
  padding: 5px;
  margin-left: 15px;
  background-color: #ffffff;
  border: 1px solid rgb(163, 163, 163);
  border-radius: 5px;
  width: 60px;
}
</style>
