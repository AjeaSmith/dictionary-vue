import { ref, watch } from "vue";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

// Determine initial theme
const currentTheme = ref(savedTheme || (prefersDark ? "dark" : "light"));

const isChecked = ref(currentTheme.value !== "light");

// React to user toggling the switch
watch(isChecked, (newVal) => {
  currentTheme.value = newVal ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme.value);
  localStorage.setItem("theme", currentTheme.value);
});

export function useTheme() {
  return {
    currentTheme,
    isChecked,
  };
}
