<template>
  <form @submit.prevent="saveParams">
    <div v-for="(param, idx) in params" :key="idx">
      <span class="mr-5">{{ param.showValue }}</span>
      <input type="checkbox" name="param" :value="param.showValue" :checked="param.isShow">
    </div>
    <Button type="submit" class="mt-3" label="Сохранить"></Button>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { mutationsTypes } from '@/store';
import { computed } from '@vue/reactivity';
import { setItem } from '@/helpers/persistanceStorage';
import { useRouter } from 'vue-router';

export default {
  name: 'AppSettinsPage',
  setup() {
    const store = useStore();
    const router = useRouter();

    const saveParams = (event) => {
      const form = event.target;
      const inputs = form.elements.param;
      if (!inputs) return;

      const arrayValuesChecked = [];
      const arrayValuesNonChecked = [];

      inputs.forEach(element => {
        const { value } = element;
        if (element.checked) {
          arrayValuesChecked.push(value);
        } else {
          arrayValuesNonChecked.push(value);
        }
      });

      setItem('hideParamsSetting', arrayValuesNonChecked);

      const paramsSetting = [...arrayValuesNonChecked, ...arrayValuesChecked].sort((x, y) => y - x);

      store.commit(mutationsTypes.setParamsSetting, paramsSetting);

      router.push({name: 'controllers'});
    };

    return {
      params: computed(() => store.state.paramsSetting),
      saveParams
    };
  }
};
</script>