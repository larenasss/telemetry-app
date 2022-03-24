<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { actionsTypes } from '@/store/index';

export default {
  name: 'App',
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(actionsTypes.loadMessages);
    });
  }
};
</script>