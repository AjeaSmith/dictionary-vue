<template>
  <label for="font" class="sr-only">Select a font:</label>
  <select name="font" id="font" v-model="selectedFont">
    <option value="sans" style="color: red">Sans Serif</option>
    <option value="serif">Serif</option>
    <option value="mono">Mono</option>
  </select>
</template>

<script setup>
import { ref, watch } from "vue";

const selectedFont = ref("sans");

watch(selectedFont, (newFont) => {
  document.documentElement.setAttribute("data-font", newFont);
});
</script>

<style scoped>
select {
  font-family: var(--app-font);
  font-weight: bold;
  appearance: none;
  color: var(--text-primary);
  background-color: var(--background);
  border: none;
  padding-right: 1.8rem;
  background-image: url("../assets/images/icon-arrow-down.svg");
  background-repeat: no-repeat;
  background-position: right 0.4rem center;
  font-size: var(--fs-body);
  transition: background-color 0.5s, color 0.5s;
}
</style>
