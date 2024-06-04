import { reactive } from "vue";

export const store = reactive({
  results: [],
  info: {},
  loading: true,
  apiUrl: "https://rickandmortyapi.com/api/character",
});
