// src/composables/useSearchAPI.js

import { computed, ref } from "vue";
import { useFetch } from "@vueuse/core";

// Define all reactive state and logic AT THE MODULE SCOPE.
// These variables will be created only once when the module is first imported,
// and then shared across all components that use useSearchAPI().
const search = ref(""); // This 'search' ref is now global to this module

const url = computed(() => {
  // If search.value is empty, return a placeholder or null to prevent invalid API calls
  // The API returns an error for empty strings anyway.
  if (!search.value) {
    return null; // or an empty string, depending on useFetch's behavior with invalid URLs
  }
  return `https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`;
});

// useFetch is called once here at module initialization.
// Its returned refs (data, isFetching, error) and function (execute)
// will be the single instance shared across the app.
const { data, isFetching, error, execute } = useFetch(url, { immediate: false });

export function useSearchAPI() {
  // This function simply returns references to the globally defined reactive state.
  return {
    search,
    data,
    isFetching,
    error,
    execute,
  };
}
