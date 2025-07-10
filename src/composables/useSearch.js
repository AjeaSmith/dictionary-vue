import { ref } from "vue";

const searchResults = ref(null);
const isLoading = ref(false);
const notFound = ref(false);

async function getSearchedWord(word) {
  try {
    isLoading.value = true;

    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!res.ok) {
      notFound.value = true;
      isLoading.value = false;
      return;
    }
    const results = await res.json();

    isLoading.value = false;
    notFound.value = false;
    searchResults.value = results;
  } catch (error) {
    notFound.value = true;
    isLoading.value = false;
    console.error(error);
  }
}

export function useSearch() {
  return {
    searchResults,
    getSearchedWord,
    notFound,
    isLoading,
  };
}
