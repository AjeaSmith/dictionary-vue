<script setup>
import { defineProps } from "vue";

const props = defineProps({
  errorData: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <section class="not-found" role="alert" aria-live="polite" v-if="props.errorData">
    <div>
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.
      </p>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  font-family: var(--app-font);
  display: flex;
  justify-items: center;
  text-align: center;

  div {
    text-align: center;
  }
  div h1 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
  div p {
    font-size: 18px;
  }
}
</style>
