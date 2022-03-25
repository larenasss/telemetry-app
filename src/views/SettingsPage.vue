<template>
  <form @submit.prevent="saveParams">
    <div v-for="(param, idx) in params" :key="idx">
      <span class="mr-5">{{ param }}</span>
      <input type="checkbox" name="param" :value="param" :checked="param">
    </div>
    <Button type="submit" class="mt-3" label="Сохранить"></Button>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { mutationsTypes } from '@/store';
import { computed } from '@vue/reactivity';
import { setItem } from '@/helpers/persistanceStorage';

export default {
  name: 'AppSettinsPage',
  setup() {
    const store = useStore();

    const saveParams = (event) => {
      const form = event.target;
      const inputs = form.elements.param;
      if (!inputs) return;

      const arrayValuesChecked = [];
      const arrayValuesNonChecked = [];
      inputs.forEach(element => {
        const { value } = element;
        if (element.checked) {
          arrayValuesNonChecked.push(value);
        } else {
          arrayValuesChecked.push(value);
        }
      });

      if (arrayValuesNonChecked.length) {
        setItem('hideParamsSetting', arrayValuesNonChecked);
      }

      store.commit(mutationsTypes.setParamsSetting, arrayValuesChecked);
    };

    return {
      params: computed(() => store.state.paramsSetting),
      saveParams
    };
  }
};
</script>