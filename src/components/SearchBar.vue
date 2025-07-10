<template>
  <form @submit.prevent="handleFormSubmit">
    <label for="search" class="sr-only">Search</label>
    <div class="search-wrap" :class="{ errorField: error }">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search for word..."
        name="search"
        id="search"
        autocomplete="off"
        :aria-invalid="!searchTerm ? true : false"
        :aria-describedby="!searchTerm ? 'search-error' : null"
      />
      <IconSearch />
    </div>
    <span v-if="error" class="error-message" id="search-error" role="alert"
      >Whoops, can’t be empty…</span
    >
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import IconSearch from "./icons/IconSearch.vue";

import { useSearch } from "@/composables/useSearch.js";

const searchTerm = ref("");
const error = ref(false);

const { getSearchedWord } = useSearch();

async function handleFormSubmit() {
  if (!searchTerm.value) {
    error.value = true;
    return;
  }
  // TODO: submit to API
  await getSearchedWord(searchTerm.value);
}
watch(searchTerm, async (newValue) => {
  if (newValue) {
    error.value = false;
  }
});
</script>

<style scoped>
form {
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
}
.search-wrap {
  background-color: var(--search);
  border-radius: 16px;
  border: 1.4px solid var(--search);
  padding: 16px;
  display: flex;
  align-items: center;
  transition: border-color 0.5s, background-color 0.5s ease;
}

.search-wrap:focus-within {
  border-color: var(--accent-color);
}

.errorField {
  border-color: red;
}

input {
  color: var(--app-font);
  font-weight: bold;
  font-family: var(--app-font);
  background-color: var(--search);
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 0;
  transition: color 0.5s, background-color 0.5s ease;
}

.error-message {
  font-size: var(--fs-body);
  color: var(--error);
  transition: color 0.5s ease;
}
.errorField {
  border: 1.4px solid var(--error);
  transition: border 0.5s ease;
}
</style>
