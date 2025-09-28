<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <SaasSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <SaasHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SaasSidebar from '../ui/SaasSidebar.vue';
import SaasHeader from '../ui/SaasHeader.vue';
</script>
