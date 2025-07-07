<template>
  <header>
    <IconLogo />
    <div class="right-side">
      <!-- dropdown fonts -->
      <FontSelect />
      <div class="divider" />
      <!-- theme switcher -->
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup>
import FontSelect from "./FontSelect.vue";
import IconLogo from "./icons/IconLogo.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-side {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.divider {
  width: 1px;
  height: 32px;
  background-color: var(--separator);
}
</style>
