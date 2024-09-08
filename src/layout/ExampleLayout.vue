<script setup lang="ts">
import { ref } from 'vue';
import { useBreadcrumbStore } from '@/store';
import { TSBreadcrumb, TSCard, TSTabMenu } from 'tsv2-library';
import { MenuItem } from 'tsv2-library/dist/src/components/v2/TabMenu/TabMenu.vue';

const { breadcrumbs } = useBreadcrumbStore();

const tabMenus = ref<MenuItem[]>([
  {
    label: 'Home',
    to: 'home',
  },
  {
    label: 'Another Page',
    to: 'another-page',
  },
]);
</script>

<template>
  <TSBreadcrumb :menus="breadcrumbs" />
  <TSCard>
    <template #content>
      <TSTabMenu :menu="tabMenus" type="tab" />
      <router-view />
    </template>
  </TSCard>
</template>
