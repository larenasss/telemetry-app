<template>
  <div class="container">
    <the-navbar></the-navbar>
    <div class="surface-ground px-4 py-5 md:px-6 lg:px-8 wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { actionsTypes } from '@/store/index';

import TheNavbar from '@/components/ui/TheNavbar';

export default {
  name: 'App',
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(actionsTypes.loadMessages);
    });
  },
  components: { TheNavbar }
};
</script>