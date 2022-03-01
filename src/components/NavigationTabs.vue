<template>
  <nav class="flex justify-around mb-5" aria-label="Tabs">
    <router-link @click="updateActive(tab.name)" v-for="tab in tabs" :to="tab.path" :class="[tab.name == activeTab.toUpperCase() ? 'border-cyan-300 text-cyan-300' : 'border-transparent text-gray-500 hover:text-gray-700', 'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs']">
      {{ tab.name }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationTabs",

  props: [
    'tabs'
  ],

  data() {
    return {
      activeTab: window.location.pathname.split("/")[3]
    }
  },

  methods: {
    updateActive(tabName: string): void {
      this.activeTab = tabName
    }
  }
})
</script>