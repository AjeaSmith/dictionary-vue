<script setup>
import { ref, watch } from "vue"; // Watch is needed for search term changes
import Header from "./components/Header.vue";
import NotFound from "./components/NotFound.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchResults from "./components/SearchResults.vue"; // Your component displaying results

// Import useSearchAPI - it will give you access to the single, shared state
import { useSearchAPI } from "@/composables/useSearch"; // Correct path as per your setup

// Destructure the shared reactive state and function
const { search, error, execute } = useSearchAPI();

// Local state for form error, reacting to the shared 'error' ref and 'search' ref
const formErrorState = ref(false); // Start with no error

// Watch the shared 'search' ref to clear form error when input changes
watch(search, (newValue) => {
  if (newValue) {
    formErrorState.value = false;
  }
});

function handleFormSubmit() {
  if (search.value && search.value.trim() !== "") {
    // Only execute if there's a non-empty search term
    execute();
    formErrorState.value = false; // Clear any previous form-level error
  } else {
    // Handle empty search term
    formErrorState.value = true;
    console.warn("Search term is empty. Please enter a word.");
  }
}
</script>

<template>
  <div class="app-container">
    <Header />

    <SearchBar
      v-model:search="search"
      :formErrorState="formErrorState"
      @submit="handleFormSubmit"
    />

    <SearchResults />

    <NotFound v-if="error" :errorData="error" />
  </div>
</template>

<style>
/* Basic styling for demonstration if needed */
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
