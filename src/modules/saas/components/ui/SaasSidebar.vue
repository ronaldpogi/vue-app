<script lang="ts" setup>
import { ref } from 'vue'
import { useSaasSidebar } from '../../composables/useSaasSidebar'
import { saasSidebarData } from '../../data/saasSidebarData'

const { isOpen } = useSaasSidebar()
const activeClass = ref('bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100')
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center justify-center text-c">
        <Icon class="text-brand-accent" icon="carbon:ibm-saas-console" width="40" height="40" />
          <span class="mx-2 text-2xl font-semibold text-white">S a  a S</span>
        </div>
      </div>

      <nav class="mt-10">
        <router-link
          v-for="x in saasSidebarData"
          :key="x.id"
          class="flex items-center px-6 py-2 mt-1 duration-200 border-l-4"
          :class="[$route.name === x.name ? activeClass : inactiveClass]"
          :to="x.to"
        >
          <Icon class="text-gray-400" :icon="x.icon" width="20" height="20" />

          <span class="mx-4 text-[13px]">{{ x.label }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
