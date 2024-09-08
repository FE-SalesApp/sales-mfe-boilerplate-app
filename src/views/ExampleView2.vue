<script setup lang="ts">
import { onMounted, shallowRef } from 'vue';
import { useBreadcrumbStore } from '@/store';

const { setBreadcrumbs } = useBreadcrumbStore();

const menus = shallowRef([
  {
    name: 'ACTS',
  },
  {
    name: 'Another Page',
  },
]);

onMounted(() => {
  setBreadcrumbs(menus.value);
});
</script>
<template>
  <h2>Hello from Another Tab</h2>
</template>
