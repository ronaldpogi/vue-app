<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="fixed right-10 bottom-20 pb-4 flex flex-col gap-3">
    <router-link
      title="Portfolio"
      to="/portfolio"
      class="flex items-center justify-center w-10 h-10 xs:w-10 xs:h-10 bg-green-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <Icon icon="bytesize:portfolio" height="15" />
    </router-link>

    <router-link
      title="Applications"
      to="/app"
      class="flex items-center justify-center w-10 h-10 xs:w-10 xs:h-10 bg-red-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <Icon icon="tdesign:app" height="15  " />
    </router-link>
  </div>
</template>

<style scoped></style>
