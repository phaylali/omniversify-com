<template>
  <div class="main-container relative">
    <!-- Frame -->
    <div class="absolute inset-[20px] border-[4px] border-[#C2B067] rounded-sm pointer-events-none"></div>

    <!-- Content -->
    <slot />
  </div>
</template>

<style>
body {
  background-color: #121212;
  color: amber;
  margin: 0;
  font-family: sans-serif;
}
div {
  color: amber;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
