<template>
  <h3 class="mb-3">Выберите период:</h3>
  <form class="flex" @submit.prevent="onSelectFilter">
    <div class="mr-5">
      <Calendar id="timeStart" v-model="dateStart" :showTime="true" :showSeconds="false" />
    </div>
    <div class="mr-5">
      <Calendar id="timeEnd" v-model="dateEnd" :showTime="true" :showSeconds="false" />
    </div>
    <Button type="submit" class="p-button-success p-button-sm" label="Показать"></Button>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AppDateFilter',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const dateStart = ref(props.modelValue.dateStart);
    const dateEnd = ref(props.modelValue.dateStart);

    const onSelectFilter = () => {
      emit('update:modelValue', {
        dateStart: dateStart.value,
        dateEnd: dateEnd.value
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