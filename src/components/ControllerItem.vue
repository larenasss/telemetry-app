<template>
  <div v-if="loading">
    <ProgressSpinner animationDuration=".1s" />
  </div>
  <template v-else>
    <div v-if="isController">
      <h3 class="mb-3">Отображение данных по контроллеру {{ controller.Id }}</h3>
      <div class="flex">
        <div class="flex flex-column">
          <div v-for="(param, idx) in params" :key="idx">
            <div>
              <router-link :to="{name: 'controller/params', params: {value: idx}}">
                {{ param }}
              </router-link>
            </div>
          </div>
        </div>
        <router-view>
        </router-view>
      </div>
    </div>
    <div v-else>
      Контроллер не найден
    </div>
  </template>
</template>

<script>
import { computed } from 'vue';
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

    const controller = computed(() => {
      return store.getters[gettersTypes.getControllerById](props.id);
    });

    const loading = computed(() => !store.state.loading);
    const isController = computed(() => Object.keys(controller.value).length);
    const params = computed(() => store.state.params);

    return {
      isController,
      controller,
      loading,
      params
    };
  }
};
</script>