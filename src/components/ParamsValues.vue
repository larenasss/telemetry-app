<template>
  <div class="flex flex-column">
    <div class="card">
      <Chart type="bar" :data="chartData" :options="horizontaChartlOptions" :height="messagesLength > 50 ? messagesLength * 4 : messagesLength * 8"/>
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

    const messages = computed(() => {
      const dateStart = new Date(route.query.dateStart);
      const dateEnd = new Date(route.query.dateEnd);

      const filterMessage = store.getters[gettersTypes.getControllerById](route.params.id).messages.filter(ms => {
        const dateMs = new Date(ms.Time);
        if (dateMs >= dateStart && dateMs <= dateEnd) {
          return ms;
        }
      });

      return filterMessage;
    });

    const chartLabel = computed(() => {
      return messages.value.length
        ? "Данные за заданный промежуток времени"
        : 'Данных за заданный промежуток времени нет';
    });

    const messagesLength = computed(() => messages.value.map(ms => ms.Time).length);

    const chartData = ref({
      labels: [...messages.value.map(ms => new Date(ms.Time).toLocaleString())],
      datasets: [
        {
          label: chartLabel.value,
          backgroundColor: '#42A5F5',
          data: [...messages.value.map(ms => ms[route.query.selectParam])]
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