<script setup lang="ts">
const appConfig = useAppConfig()
const { locale,locales, setLocale } = useI18n()
// This log is useful for debugging the theme configuration.
console.log(appConfig.theme)
watch(locale, (newLocale) => {
  if (process.client) {
    document.documentElement.setAttribute('data-locale', newLocale);
  }
}, { immediate: true });

// Set initial locale on mount
onMounted(() => {
  document.documentElement.setAttribute('data-locale', locale.value);
});
</script>
<template>
  <div class="main-container relative">
    <div class="background-pattern"></div>
    <!-- Frame -->
    <div class="absolute inset-[20px] border-[4px] border-[#C2B067] rounded-sm pointer-events-none"></div>

    <div class="absolute flex flex-row items-center gap-2 text-gold-500 h-10 inset-[30px] justify-end">
     
            <button @click="setLocale('ar')" class="language-btn arabic-text">ع</button>
      <button @click="setLocale('amz')" class="language-btn amazigh-text">ⵣ</button>
      <button @click="setLocale('en')" class="language-btn english-text">A</button>
      <FullScreenMenu />
    </div>
    <!-- Content -->
    <slot />
  </div>
</template>

<style>
body {
  background-color: #121212;

}
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
