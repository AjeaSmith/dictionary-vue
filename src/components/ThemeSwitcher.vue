<script setup>
import { onMounted } from "vue";
import IconMoon from "./icons/IconMoon.vue";
import { useTheme } from "@/composables/useTheme.js";

const { currentTheme, isChecked } = useTheme();

onMounted(() => {
  document.documentElement.setAttribute("data-theme", currentTheme.value);
});
</script>

<template>
  <div class="toggle-group">
    <label class="switch" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="isChecked" />
      <span class="slider"></span>
    </label>
    <IconMoon />
  </div>
</template>

<style scoped>
.toggle-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
/* Toggle Container */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

/* Hide the checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--icon);
  transition: 0.4s;
  border-radius: 28px;
}

/* Circle inside the slider */
.slider::before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

/* Toggle ON */
input:checked + .slider {
  background-color: var(--icon);
}

input:checked + .slider::before {
  transform: translateX(22px);
}
</style>
