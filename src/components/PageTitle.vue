<template>
  <h1 class="text-4xl font-medium mb-5">{{ pageTitle }}</h1>
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