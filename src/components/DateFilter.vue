<template>
  <h3 class="mb-3">Выберите период:</h3>
  <form class="flex" @submit.prevent="onSelectFilter">
    <div class="mr-5">
      <Calendar id="timeStart" v-model="dateStart" :showTime="true" :showSeconds="false" dateFormat="dd.mm.yy"/>
    </div>
    <div class="mr-5">
      <Calendar id="timeEnd" v-model="dateEnd" :showTime="true" :showSeconds="false" dateFormat="dd.mm.yy"/>
    </div>
    <Button type="submit" class="p-button-success p-button-sm" label="Показать"></Button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { convertDateToJson } from '@/helpers/dateConverterForQuery';

export default {
  name: 'AppDateFilter',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const dateStart = ref(props.modelValue.dateStart);
    const dateEnd = ref(props.modelValue.dateEnd);

    const onSelectFilter = () => {
      emit('update:modelValue', {
        dateStart: convertDateToJson(dateStart.value),
        dateEnd: convertDateToJson(dateEnd.value)
      });
    };

    return {
      dateStart,
      dateEnd,
      onSelectFilter
    };
  }
};
</script>