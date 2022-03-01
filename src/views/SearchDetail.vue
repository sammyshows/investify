<template>
  <PageContainer>
    <div class="flex justify-between">
      <PageTitle :pageDetails="pageDetails" class="truncate mr-3" />
      <h2 class="mb-5 my-auto text-lg text-cyan-300">ASX:VUL</h2>
    </div>
    <NavigationTabs :tabs="tabs" />
    <router-view />
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

  data() {
    return {
      pageDetails: {
        title: "Vulcan Energy Resources",
        returnPath: "/search"
      },

      tabs: [
        { name: 'SUMMARY', path: '/search/code/summary' },
        { name: 'CHART', path: '/search/code/chart' }
      ]
    }
  }
}
</script>