<template>
  <PageContainer>
    <div class="flex justify-between">
      <PageTitle :pageDetails="pageDetails" class="truncate mr-3" />
      <h2 class="mb-5 my-auto text-lg text-cyan-300">ASX:VUL</h2>
    </div>
    <NavigationTabs :tabs="tabs" />
    <router-view :companyOverview="companyOverview" :quote="quote" />
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import NavigationTabs from "../components/NavigationTabs";

export default {
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
        title: "Vulcan Energy Resources",
        returnPath: "/search"
      },

      tabs: [
        { name: 'SUMMARY', path: '/search/code/summary' },
        { name: 'CHART', path: '/search/code/chart' }
      ],

      companyOverview: {},
      quote: {}
    }
  },

  methods: {
    fetchOverview() {
      // fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=B642KXFN4VUO0FC2", {
      fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo", {
        "method": "GET"
      })
        .then(response => response.json())
        .then(companyOverview => this.companyOverview = companyOverview)
    },

    fetchQuote() {
      fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=B642KXFN4VUO0FC2", {
        "method": "GET"
      })
        .then(response => response.json())
        .then(quote => this.quote = quote["Global Quote"])
    }
  }
}
</script>