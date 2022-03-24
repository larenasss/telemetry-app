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
            <router-link :to="{name: 'controller', params: {id: controller.Id}}">
              <Button :label="controller.Id" class="p-button-raised p-button-info" />
            </router-link>
          </div>
        </div>
      </div>
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