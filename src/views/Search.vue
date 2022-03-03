<template>
  <PageContainer>
    <PageTitle :pageDetails="pageDetails" />

    <div class="mt-1 relative rounded shadow-sm mb-5">
      <div class="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
        <SearchIcon class="h-7 w-7" aria-hidden="true" />
      </div>
      <input @keyup.enter="fetchSearch($event.target.value)" type="text" name="search" placeholder="Search" class="focus:ring-indigo-500 focus:border-indigo-500 block bg-gray-900 w-full pl-12 text-xs border-gray-600 rounded-md" />
    </div>

    <div v-if="searchResults" class="">
      <h2 class="mb-3 py-2 border-b-4 border-white w-max font-medium">SEARCH RESULTS</h2>
      <div class="flex justify-between px-1 py-2">
        <p class="text-xs font-medium">NAME</p>
        <p class="text-xs font-medium">TICKER</p>
      </div>
      <router-link v-for="result in searchResults" :to="{ name: 'SearchDetailSummary', params: { symbol: 'tsla' } }" class="flex justify-between items-center px-1 py-2 border-t border-white hover:bg-gray-700 duration-300 gap-x-10">
        <p class="text-xs truncate">{{ result.name }}</p>
        <p class="text-bright-cyan">{{ result.symbol }}</p>
      </router-link>
    </div>

    <div v-else>
      <h2 class="py-2 border-b-4 border-white w-max font-medium">Recent</h2>
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContainer from "../components/PageContainer.vue"
import PageTitle from "../components/PageTitle.vue"
import { SearchIcon } from '@heroicons/vue/solid'
import AutoComplete from 'primevue/autocomplete'

export default defineComponent({
  name: "Search",

  components: {
    PageContainer, PageTitle, SearchIcon, AutoComplete
  },

  data() {
    return {
      pageDetails: {
        title: "Search",
      },
      searchTerm: '',
      searchResults: null as Array<{}> | null
    }
  },

  methods: {
    fetchSearch(searchTerm: string): void {
      this.searchResults = []
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=B642KXFN4VUO0FC2`, {
        "method": "GET"
      })
          .then(response => response.json())
          .then(data => {
            const results = data.bestMatches.slice(0, 5)
            console.log(results)
            results.forEach((result: any) => {
              const searchResult = {
                name: result["2. name"],
                symbol: result["1. symbol"]
              }
              this.searchResults?.push(searchResult)
            })
          })
    }
  }
})
</script>

<style scoped>

</style>
