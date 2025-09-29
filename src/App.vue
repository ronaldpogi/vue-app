<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ToastComponent from './components/ui/BaseToast.vue'
import { useToastStore } from './store/toastStore'
import { useHead } from '@vueuse/head'

const toastStore = useToastStore()

const { currentRoute } = useRouter()

const defaultLayout = 'empty'
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)

const defaultTitle = 'Ronald Bibon'
const defaultDescription = 'Default description'

const head = computed(() => {
  const meta = currentRoute.value.meta
  return {
    title: (meta.title as string) || defaultTitle,
    meta: [
      {
        name: 'description',
        content: (meta.description as string) || defaultDescription,
      },
    ],
  }
})

useHead(head)
</script>

<template>

  <ToastComponent
      v-for="alert in toastStore.alerts"
      :key="alert.id"
      :type="alert.type"
      :title="alert.title"
      :message="alert.message"
  />

  <component :is="layout">
    <router-view />
  </component>

  <div class="fixed right-10 bottom-20 pb-4 flex flex-col gap-3">
    <router-link
      title="Portfolio"
      to="/portfolio"
      class="flex items-center justify-center w-10 h-10 xs:w-10 xs:h-10 bg-brand-green text-white rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <Icon icon="bytesize:portfolio" height="15" />
    </router-link>

    <router-link
      title="Applications"
      to="/app"
      class="flex items-center justify-center w-10 h-10 xs:w-10 xs:h-10 bg-brand-red text-white rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <Icon icon="tdesign:app" height="15  " />
    </router-link>
  </div>
</template>

<style scoped></style>
