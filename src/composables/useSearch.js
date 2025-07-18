import { ref } from "vue";

const search = ref("");
const results = ref([]);
const foundWord = ref(true);

async function searchWord(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

    if (!res.ok) {
      foundWord.value = false;
      return;
    }

    const data = await res.json();
    foundWord.value = true;
    results.value = data;
  } catch (error) {
    console.log(error);
  }
}
export function useSearchAPI() {
  // This function simply returns references to the globally defined reactive state.
  return {
    foundWord,
    results,
    search,
    searchWord,
  };
}
