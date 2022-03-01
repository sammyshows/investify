<template>
  <div id="page" class="h-screen flex flex-col justify-between pt-10 pb-5">
    <div class="h-full px-10">
      <slot></slot>
    </div>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar"

  export default {
    name: "PageContainer",

    components: {
      NavigationBar
    }
  }
</script>

<style>
  #page {
    background: linear-gradient(225deg, hsla(0, 0%, 0%, 1) 20%, hsla(180, 17%, 53%, 1) 100%);
    font-family: Poppins;
  }
</style>