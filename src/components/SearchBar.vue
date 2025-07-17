<script setup>
import { defineProps, defineEmits } from "vue";

// Define props for v-model:search and formErrorState
const props = defineProps({
  search: {
    type: String,
    default: "",
  },
  formErrorState: {
    type: Boolean,
    default: false,
  },
});

// Define emits for updating v-model and handling submit
const emit = defineEmits(["update:search", "submit"]);

// Function to handle input change and update the v-model binding
function updateSearch(event) {
  emit("update:search", event.target.value);
}

// Function to handle form submission
function handleSubmit() {
  emit("submit");
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="search-bar">
    <input
      type="search"
      placeholder="Search for a word..."
      :value="props.search"
      @input="updateSearch"
      :class="{ 'input-error': props.formErrorState }"
    />
    <p v-if="props.formErrorState" class="error-message">Please enter a word.</p>
  </form>
</template>

<style scoped>
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-bar input {
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
