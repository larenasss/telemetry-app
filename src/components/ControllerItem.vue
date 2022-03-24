<template>
  <div>{{ controller }}</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

import { gettersTypes } from '@/store/index';

export default {
  props: {
    id: {
      type: String,
      requered: true
    }
  },
  setup(props) {
    const store = useStore();
    const controller = computed(() => store.getters[gettersTypes.getControllerById](props.id));

    console.log(store.getters[gettersTypes.getControllerById](props.id));

    return {
      controller
    };
  }
};
</script>