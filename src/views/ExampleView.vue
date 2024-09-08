<script setup lang="ts">
import { onMounted, shallowRef } from 'vue';
import { useBreadcrumbStore } from '@/store';

const { setBreadcrumbs } = useBreadcrumbStore();

const menus = shallowRef([
  {
    name: 'ACTS',
  },
  {
    name: 'Home',
  },
]);

onMounted(() => {
  setBreadcrumbs(menus.value);
});
</script>
<template>
  <h2>Hello from Home</h2>
</template>
