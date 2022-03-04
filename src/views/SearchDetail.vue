<template>
  <PageContainer>
    <div class="flex justify-between">
      <PageTitle :pageDetails="pageDetails" class="truncate mr-3" />
      <h2 class="mb-5 my-auto text-lg text-cyan-300">{{ quote["01. symbol"] }}</h2>
    </div>
    <NavigationTabs :tabs="tabs" />
    <router-view :companyOverview="companyOverview" :quote="quote" />
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import PageTitle from "../components/PageTitle.vue";
import NavigationTabs from "../components/NavigationTabs.vue";

interface StringObject {
  [index: string]: string;
}

export default defineComponent({
  name: "Search Detail",

  components: {
    PageContainer, PageTitle, NavigationTabs
  },

  created() {
    this.fetchOverview()
    this.fetchQuote()
  },

  data() {
    return {
      pageDetails: {
        title: '',
        returnPath: "/search"
      },

      tabs: [
        { name: 'SUMMARY', path: '/search/code/summary' },
        { name: 'CHART', path: '/search/code/chart' }
      ],

      symbol: window.location.pathname.split('/')[2],
      companyOverview: {},
      quote: {} as StringObject
    }
  },

  watch: {
    'companyOverview.Name'(newName) {
      this.pageDetails.title = newName
    }
  },

  methods: {
    fetchOverview() {
      fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.symbol}&apikey=B642KXFN4VUO0FC2`, {
        "method": "GET"
      })
        .then(response => response.json())
        .then(companyOverview => this.companyOverview = companyOverview)
    },

    fetchQuote() {
      fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.symbol}&apikey=B642KXFN4VUO0FC2`, {
        "method": "GET"
      })
        .then(response => response.json())
        .then(quote => this.quote = quote["Global Quote"])
    }
  }
})
</script>