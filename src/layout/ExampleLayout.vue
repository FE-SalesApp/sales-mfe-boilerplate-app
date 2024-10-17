<script setup lang="ts">
import { ref } from 'vue';
import { useBreadcrumbStore } from '@/store';
import { Breadcrumb, Card, TabMenu } from 'wangsvue';
import { MenuItem } from 'wangsvue/components/menuitem/index.d';

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
  <Breadcrumb :menus="breadcrumbs" />
  <Card>
    <template #content>
      <TabMenu :menu="tabMenus" type="tab" />
      <router-view />
    </template>
  </Card>
</template>
