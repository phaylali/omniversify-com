<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
const { t } = useI18n();
useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
useHead({
  title: t('pages.blog')
});

definePageMeta({
  titleKey: 'pages.blog'
});

</script>
<template>
  <ContentRenderer v-if="page" :value="page" />
</template>