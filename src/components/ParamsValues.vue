<template>
  <div class="flex flex-column">
     <div class="card">
        <Chart type="bar" :data="basicData" :options="basicOptions" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import { gettersTypes } from '@/store/index';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const message = computed(() => store.getters[gettersTypes.getControllerById](route.params.id).message);

    const basicData = ref({
      labels: [...message.value.map(ms => ms.Time)],
      datasets: [
        {
          label: 'График по времени',
          backgroundColor: '#42A5F5',
          data: [...message.value.map(ms => ms[route.params.key] ?? 100)]
        },
      ]
    });

    const basicOptions = ref(
      {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              }
          }
      }
  );

    return {
      message,
      basicData,
      basicOptions
    };
  }
};
</script>