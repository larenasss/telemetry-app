<template>
  <Menubar :model="items" class="surface-section justify-content-between px-4 py-5 md:px-6 lg:px-8">
     <template #start>
        <div class="font-medium text-3xl text-900">Telemetry</div>
    </template>
    <template #item="{item}">
      <router-link :to="item.to" custom v-slot="{navigate, isActive, isExactActive}">
          <Button
            @click="navigate"
            class="p-button-secondary p-button-text mr-2 p-button-sm"
            :class="{'active-link': isActive, 'active-link-exact': isExactActive}">
            {{item.label}}
          </Button>
      </router-link>
    </template>
  </Menubar>
</template>

<script>
export default {
  name: 'AppTheNavbar',
  setup() {
    const items = [
      {
        label: 'Список контроллеров',
        to: '/controllers'
      },
      {
        label: 'Настройка отображения параметров',
        to: '/settings'
      }
    ];

    return {
      items
    };
  }
};
</script>

<style lang="scss" scoped>
  .active-link-exact {
    box-shadow: 0 0 0 0.2rem #beccd2;
  }
</style>