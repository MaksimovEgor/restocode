<template>
  <section class="sidebar">
    <div>
      <h2>Панель админитратора</h2>
      <ul v-if="sidebarView === SidebarView.CONTACTS">
        <div class="sidebar__form">
          <textarea v-model="text"></textarea>
          <input
            v-model="inputText"
            type="text" />
          <button @click="saveData">Сохранить данные</button>
        </div>
      </ul>
    </div>

    <!-- <slot></slot> -->
  </section>
</template>

<script setup lang="ts">
  // import Sidebar from 'primevue/sidebar';


  import { useGlobalStore, SidebarView } from '../../stores/globalStore';
  import { computed } from 'vue';

  const globalStore = useGlobalStore();
  const sidebarView = computed(() => globalStore.sidebarView);
</script>

<style scoped src="./style.css"></style>
