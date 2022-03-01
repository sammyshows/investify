<template>
  <div class="flex">
    <router-link v-if="pageDetails?.returnPath" :to="pageDetails?.returnPath">
      <ChevronLeftIcon class="h-8 w-8 mr-2" />
    </router-link>
    <h1 class="text-2xl font-medium mb-5 truncate">{{ pageDetails.title }}</h1>
  </div>
</template>

<script lang="ts">
import { ChevronLeftIcon} from "@heroicons/vue/outline";

export default {
  name: "PageTitle",

  props: [
    'pageDetails'
  ],

  components: {
    ChevronLeftIcon
  }
}
</script>

<style>

</style>