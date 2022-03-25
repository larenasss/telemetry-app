<template>
  <div v-if="loading">
    <ProgressSpinner animationDuration=".1s" />
  </div>
  <template v-else>
    <div v-if="isController">
      <div class="mb-3">
        <date-filter v-model="filter"></date-filter>
      </div>
      <h3 class="mb-3">Отображение данных по контроллеру {{ controller.Id }}</h3>
      <div class="flex">
        <router-view class="flex-1" :key="$route.fullPath">
        </router-view>
        <div class="flex flex-column ml-5">
          <div v-if="isParamActiveLength" class="flex flex-column">
            <div v-for="ps in paramsSetting" :key="ps">
              <div v-if="ps.isShow">
                <router-link
                  :to="{
                    name: 'controller/params',
                    params: {id: controller.Id},
                    query: {selectParam: ps.showValue, dateStart: $route.query.dateStart, dateEnd: $route.query.dateEnd}
                  }"
                  custom v-slot="{navigate, isActive}">
                  <Button
                    @click="navigate"
                    :label="ps.showValue"
                    class="p-button-link"
                    :class="{'active-link': isActive}"/>
                </router-link>
              </div>
            </div>
          </div>
          <div v-else>
            Нет доступных параметров, перейдите в настройки
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { gettersTypes } from '@/store/index';

import DateFilter from '@/components/DateFilter';
import { useRouter, useRoute } from 'vue-router';
import { watch } from 'vue';

export default {
  props: {
    id: {
      type: String,
      requered: true
    }
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const filter = ref({
      dateStart: new Date(route.query.dateStart),
      dateEnd: new Date(route.query.dateEnd)
    });

    const controller = computed(() => {
      return store.getters[gettersTypes.getControllerById](props.id);
    });

    const loading = computed(() => !store.state.loading);
    const isController = computed(() => Object.keys(controller.value).length);
    const paramsSetting = computed(() => store.state.paramsSetting);
    const isParamActiveLength = computed(() => store.state.paramsSetting.filter(ps => ps.isShow).length);

    watch(filter, (nValue) => {
      router.push({
        push: `${router.currentRoute.value.fullPath}`,
        query: { dateStart: nValue.dateStart, dateEnd: nValue.dateEnd }
      });
    });

    return {
      isController,
      controller,
      loading,
      paramsSetting,
      filter,
      isParamActiveLength
    };
  },
  components: { DateFilter }
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