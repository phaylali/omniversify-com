<script setup lang="ts">
const appConfig = useAppConfig()
const { t, locale, setLocale } = useI18n()
// This log is useful for debugging the theme configuration.
console.log(appConfig.theme)

// Use useHead to manage the lang attribute properly
useHead({
  htmlAttrs: {
    lang: locale,
    'data-locale': locale
  }
});

// Still need the body class approach for CSS
watch(locale, (newLocale) => {
  if (import.meta.client) {
    // Remove existing locale classes
    document.body.classList.forEach(className => {
      if (className.startsWith('locale-')) {
        document.body.classList.remove(className);
      }
    });
    // Add new locale class
    document.body.classList.add(`locale-${newLocale}`);
  }
}, { immediate: true });

const route = useRoute();


// Get localized page title
const pageTitle = computed(() => {
  // Method 1: Use titleKey from page meta
  if (route.meta.titleKey) {
    if (route.meta.titleKey === true) {
      // Use route name as translation key
      return t(`pages.${String(route.name)}`);
    }
    // Use custom translation key
    return t(route.meta.titleKey as string);
  }
});
</script>
<template>
  <div class="main-container relative">
    <div class="background-pattern"></div>
    <!-- Frame -->
    <div class="absolute inset-[20px] border-[4px] border-[#C2B067] rounded-sm pointer-events-none"></div>
<div class="simple-bar"></div>
<div class="absolute flex flex-row items-center gap-2 text-gold-500 h-10 inset-[30px] justify-between">
  
  <!-- Page title - centered in available space -->
  <div class="flex-1 text-center">
    <h1 class="locale-text text-xl font-semibold">{{ pageTitle }}</h1>
  </div>
  
  <!-- Language buttons and menu - on the right -->
  <div class="flex flex-row items-center gap-2">
    <button @click="setLocale('ar')" class="language-btn arabic-text">ع</button>
    <button @click="setLocale('amz')" class="language-btn amazigh-text">ⵣ</button>
    <button @click="setLocale('en')" class="language-btn english-text">A</button>
    <FullScreenMenu />
  </div>
  
</div>
    <!-- Content -->
    <slot />
  </div>
</template>
