<template>
  <PageContainer>
    <PageTitle pageTitle="Search" />

    <div class="mt-1 relative rounded shadow-sm mb-5">
      <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
        <SearchIcon class="h-7 w-7" aria-hidden="true" />
      </div>
      <input type="text" name="search" placeholder="Search" class="focus:ring-indigo-500 focus:border-indigo-500 block bg-gray-900 w-full pl-12 text-xs border-gray-600 rounded-md" />
    </div>

    <h2 class="py-2 border-b-4 border-white w-max">Recent</h2>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer"
import PageTitle from "../components/PageTitle"
import { SearchIcon } from '@heroicons/vue/solid'

export default {
  name: "Search",

  components: {
    PageContainer, PageTitle, SearchIcon
  }
}
</script>

<style scoped>

</style>
