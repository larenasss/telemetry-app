<template>
  <form @submit.prevent="saveParams">
    <div v-for="(param, idx) in params" :key="idx">
      <span>{{ param }}</span>
      <input type="checkbox" name="param" :value="param" checked>
    </div>
    <Button type="submit" class="mt-3" label="Сохранить"></Button>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { mutationsTypes } from '@/store';
import { computed } from '@vue/reactivity';

export default {
  name: 'AppSettinsPage',
  setup() {
    const store = useStore();

    const saveParams = (event) => {
      const form = event.target;
      const inputs = form.elements.param;
      if (!inputs) return;

      const arrayValues = [];
      inputs.forEach(element => {
        if (!element.checked) return;
        const { value } = element;
        arrayValues.push(value);
      });
      store.commit(mutationsTypes.setParams, arrayValues);
    };

    return {
      params: computed(() => store.state.params),
      saveParams
    };
  }
};
</script>