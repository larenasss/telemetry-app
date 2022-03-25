<template>
  <div v-if="loading">
    <ProgressSpinner animationDuration=".1s" />
  </div>
  <template v-else>
    <div v-if="isController">
      <h3 class="mb-3">Отображение данных по контроллеру {{ controller.Id }}</h3>
      <div class="flex">
        <router-view class="flex-1" :key="$route.fullPath">
        </router-view>
        <div class="flex flex-column ml-5">
          <div v-for="ps in paramsSetting" :key="ps">
            <div>
              <router-link
                :to="{name: 'controller/params', params: {id: controller.Id}, query: {pv: ps}}"
                custom v-slot="{navigate, isActive}">
                <Button
                  @click="navigate"
                  :label="ps"
                  class="p-button-link"
                  :class="{'active-link': isActive}"/>
              </router-link>
            </div>
          </div>
        </div>
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
    const paramsSetting = computed(() => store.state.paramsSetting);

    return {
      isController,
      controller,
      loading,
      paramsSetting
    };
  }
};
</script>

<style lang="scss" scoped>
  .p-button {
    padding: .2rem;
  }

  .active-link-exact {
    background: transparent;
    box-shadow: 0 0 0 0.2rem #a6d5fa;
    border-color: transparent;
  }
</style>