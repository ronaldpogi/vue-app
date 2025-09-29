<script lang="ts" setup>
import { useGsapReveal } from '@/composables/useGsapAnimation'
import apps from '../data/apps';

const typedApps = apps

useGsapReveal()
</script>

<template>
  <div class="bg-brand p-10 min-h-screen">
    <div class="max-w-7xl mx-auto px-2">
      <ul class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 p-2 xl:p-5">

        <li
          v-for="x in typedApps"
          :key="x.name"
          class="reveal-hero-img relative bg-brand-white flex flex-col justify-between border-2 border-brand-light hover:border-brand-highlight cursor-pointer"
        >
        <router-link to="saas/login">
          <div class="relative">
            <div class="relative w-full aspect-video">
              <img
                class="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Writey A.I"
                loading="lazy"
              />

              <div class="bottom-0 p-4 bg-gradient-to-b from-brand-dark to-brand text-brand-white">
                <h2 class="text-xl font-semibold">{{ x.name }}</h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-beetween px-4 py-3 gap-2">
            <p class="text-brand-dark two-lines text-sm">
              {{ x.desciption }}
            </p>

            <ul class="flex flex-wrap items-center justify-start gap-1">
              <li
                v-for="y in x.scopes"
                :key="y"
                title="Pricing type"
                class="flex items-center cursor-pointer bg-brand-light text-brand-accent px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase"
              >{{ y }}</li>
            </ul>


          </div>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<style></style>
