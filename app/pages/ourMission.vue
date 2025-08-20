<script setup lang="ts">
const { t } = useI18n();

// Set the title dynamically
useHead({
  title: t('pages.ourMission')
});
// Optional: Also set the titleKey for the layout
definePageMeta({
  titleKey: 'pages.ourMission'
});
</script>
<template>

<div class="flex flex-col  gap-4 text-gold-500 p-20 text-center align-middle justify-center h-screen">
<h1 class="locale-text text-2xl">{{$t('content')}}</h1>
</div>
</template>