<template>
  <div>
    <div class="sm:block">
      <div>
        <nav class="flex" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'text-blue-200' : 'hover:text-gray-700', 'w-1/4 py-4 px-1 text-center font-medium text-white text-sm']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
const tabs = [
  { name: 'Notifications', href: '#', current: false },
  { name: 'Search', href: '#', current: true },
  { name: 'Home', href: '#', current: false },
  { name: 'Studies', href: '#', current: false },
  { name: 'Account', href: '#', current: false },
]

export default {
  name: "NavigationBar",

  setup() {
    return {
      tabs,
    }
  }
}
</script>