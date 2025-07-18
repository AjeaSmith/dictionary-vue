<script setup>
import { useSearchAPI } from "@/composables/useSearch";
import { ref, watch } from "vue";

const { searchWord } = useSearchAPI();
const search = ref("");
const fieldError = ref(false);

async function handleSubmit() {
  if (!search.value) {
    fieldError.value = true;
    return;
  }
  await searchWord(search.value);
}
watch(search, (newValue) => {
  console.log(newValue);
  if (!newValue) {
    fieldError.value = true;
  }
  fieldError.value = false;
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="search-bar">
    <input
      v-model="search"
      type="search"
      placeholder="Search for a word..."
      :class="{ 'input-error': fieldError }"
    />
    <p v-if="fieldError" class="error-message">Please enter a word.</p>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.search-bar input {
  margin-top: 2rem;
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.search-bar input.input-error {
  border-color: red;
}
.search-bar button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>
