<script setup>
import Header from "./components/Header.vue";
import NotFound from "./components/NotFound.vue";
import SearchBar from "./components/SearchBar.vue";
import SearchResults from "./components/SearchResults.vue";
</script>

<template>
  <div class="app-container">
    <Header />

    <SearchBar />

    <SearchResults />

    <NotFound />
  </div>
</template>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
