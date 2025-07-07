<template>
  <header>
    <IconLogo />
    <div>
      <!-- dropdown fonts -->
      <!-- theme switcher -->
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup>
import IconLogo from "./icons/IconLogo.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
