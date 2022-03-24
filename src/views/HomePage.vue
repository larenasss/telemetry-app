<template>
  <controllers-list :controllers="controllers"></controllers-list>
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

    console.log(store);

    const controllers = computed(() => store.getters[gettersTypes.getControllers]);

    return {
      controllers
    };
  }
};
</script>