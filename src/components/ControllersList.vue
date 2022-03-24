<template>
  <div v-if="controllers.length" >
    <div v-for="controller in controllers" :key="controller.Id">
      <router-link
        :to="{name: 'controller',
        params: {id: controller.Id}}">
        {{ controller.Id }}
      </router-link>
      <span>
        {{ controller.TruckId }}
      </span>
    </div>
  </div>
  <div v-else>
    Записей нет
  </div>
</template>

<script>
export default {
  props: {
    controllers: {
      type: Array,
      requered: true
    }
  }
};
</script>

<style>

</style>