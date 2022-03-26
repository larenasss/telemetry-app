<template>
  <div v-if="loading">
    <ProgressSpinner animationDuration="1s" />
  </div>
  <template v-else>
    <controllers-list :controllers="controllers"></controllers-list>
  </template>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import ControllersList from '@/components/ControllersList';

import { gettersTypes } from '@/store/index';

export default {
  components: { ControllersList },
  name: 'AppHomePage',
  setup() {
    const store = useStore();

    const controllers = computed(() => store.getters[gettersTypes.getControllersForUI]);

    const loading = computed(() => !store.state.loading);

    return {
      controllers,
      loading
    };
  }
};
</script>