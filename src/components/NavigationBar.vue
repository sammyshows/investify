<template>
  <div>
    <div class="sm:block">
      <nav class="flex justify-around px-2.5" aria-label="Tabs">
        <BellIcon class="h-10 w-10 text-gray-700" />
        <SearchIcon class="h-10 w-10" />
        <HomeIcon class="h-10 w-10 text-gray-700" />
        <DocumentSearchIcon class="h-10 w-10 text-gray-700" />
        <UserCircleIcon class="h-10 w-10 text-gray-700" />
      </nav>
    </div>
  </div>
</template>

<script>
import { BellIcon, SearchIcon, HomeIcon, DocumentSearchIcon, UserCircleIcon } from '@heroicons/vue/outline'

export default {
  name: "NavigationBar",

  components: {
    BellIcon, SearchIcon, HomeIcon, DocumentSearchIcon, UserCircleIcon
  }
}
</script>