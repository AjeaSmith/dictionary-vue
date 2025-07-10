<script setup>
import Header from "./components/Header.vue";
import NotFound from "./components/NotFound.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchResults from "./components/SearchResults.vue";
import { useSearch } from "./composables/useSearch";

const { notFound, isLoading } = useSearch();
</script>

<template>
  <Header />
  <SearchBar />

  <NotFound v-if="notFound" />
  <div v-else-if="isLoading" style="text-align: center; margin-top: 2rem">Loading...</div>
  <SearchResults v-else />
</template>

<style></style>
