<template>
  <div class="grid" v-if="controllers.length">
      <div class="col-12 md:col-6 lg:col-3" v-for="controller in controllers" :key="controller.Id">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="text-900 font-medium text-xl mb-3">
            <span>TruckId: </span>
            <span>{{ controller.TruckId }}</span>
          </div>
          <div class="text-900 font-medium text-xl flex align-items-center">
            <span class="mr-3">Imei: </span>
            <router-link
              :to="{
                name: 'controller/params',
                params: {id: controller.Id},
                query: {selectParam: firstDefaultParam, dateStart: startFilterValue, dateEnd: endFilterValue }
              }">
              <Button :label="controller.Id" class="p-button-raised p-button-info" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

import { convertDateToJson } from '@/helpers/dateConverterForQuery';

export default {
  props: {
    controllers: {
      type: Array,
      requered: true
    }
  },
  setup() {
    const store = useStore();

    const startFilterValue = new Date("2022-02-22T00:01:00");
    const endFilterValue = new Date("2022-02-24T23:59:00");

    const firstDefaultParam = computed(() => store.state.paramsSetting.filter(ps => ps.isShow)[0]?.showValue ?? "");

    return {
      firstDefaultParam,
      startFilterValue: convertDateToJson(startFilterValue),
      endFilterValue: convertDateToJson(endFilterValue),
    };
  }
};
</script>