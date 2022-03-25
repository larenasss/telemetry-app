<template>
  <div class="flex flex-column">
    <div class="card">
      <Chart type="bar" :data="chartData" :options="horizontaChartlOptions" :height="messagesLength * 3"/>
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

    const messages = computed(() => store.getters[gettersTypes.getControllerById](route.params.id).messages);
    const messagesLength = computed(() => messages.value.map(ms => ms.Time).length);

    const chartData = ref({
      labels: [...messages.value.map(ms => ms.Time)],
      datasets: [
        {
          label: 'График по времени',
          backgroundColor: '#42A5F5',
          data: [...messages.value.map(ms => ms[route.query.pv] ?? 100)]
        },
      ]
    });

    const horizontaChartlOptions = ref(
      {
        indexAxis: 'y',
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
              color: '#495057',
              maxTicksLimit: messagesLength
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      }
    );

    return {
      messages,
      chartData,
      horizontaChartlOptions,
      messagesLength
    };
  }
};
</script>