<template>
  <h1 class="text-white text-4xl font-medium">{{ pageTitle }}</h1>
</template>

<script lang="ts">

export default {
  name: "PageTitle",

  props: {
    pageTitle: String
  }
}
</script>

<style>

</style>