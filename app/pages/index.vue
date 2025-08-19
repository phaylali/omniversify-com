<script setup lang="ts">
const appConfig = useAppConfig()
const { locales, setLocale } = useI18n()
// This log is useful for debugging the theme configuration.
console.log(appConfig.theme)

</script>

<template>
  <div class="flex flex-col items-center gap-4 text-gold-500">
    <h1 class="english-text">Welcome to Nuxt UI!</h1>
    <!-- Assuming arabic-text, amazigh-text, and english-text are custom components. -->
    <!-- If they are simple text wrappers, consider using semantic <p> tags. -->
    <div class="arabic-text">السلام عليكم ورحمة الله وبركاته</div>
    <div class="amazigh-text">ⴼⴳⴳⴼⵀⵊⴳⴼⴱⴼⵜ ⵜⴱⵀⵢⴼ</div>
    <div class="english-text">This uses MyCustomFont.</div>
    <div class="flex items-center gap-2">
      <UButton :to="$switchLocalePath('en')" color="warning" variant="outline">English</UButton>
      <UButton :to="$switchLocalePath('ar')" color="warning" variant="soft">Arabic</UButton>
        
    
    </div>
    <div class="flex flex-row items-center gap-2 text-gold-500">
      
      <button @click="setLocale('ar')" class="language-btn arabic-text">ع</button>
      <button @click="setLocale('amz')" class="language-btn amazigh-text">ⵣ</button>
      <button @click="setLocale('en')" class="language-btn english-text">A</button>
      
      
    </div>
    <UContainer>
      <Placeholder class="h-32" />
    </UContainer>
  </div>
</template>
