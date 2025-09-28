<template>
  <div class="bg-brand p-10 min-h-screen">
    <div class="max-w-7xl mx-auto px-2">
      <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
        <li
          class="relative bg-brand-white flex flex-col justify-between border border-brand-light hover:border-brand-highlight cursor-pointer"
        >
          <a class="relative" href="#">
            <div class="relative w-full aspect-video">
              <img
                class="rounded w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Writey A.I"
                loading="lazy"
              />

              <div class="bottom-0 p-4 bg-gradient-to-b from-brand-dark to-brand text-brand-white">
                <h2 class="text-xl font-semibold">AUTHENTICATION</h2>
              </div>
            </div>
          </a>

          <div class="flex flex-col justify-beetween gap-1 px-4 py-2">
            <p class="text-gray-600 two-lines">
              A simple Authentication using laravel & PHP as server side language
            </p>

            <ul class="flex flex-wrap items-center justify-start text-sm">
              <li
                title="Pricing type"
                class="flex items-center cursor-pointer gap-0.5 bg-brand-light text-brand-dark px-2 py-0.5 rounded-full"
              ></li>
            </ul>

            <ul class="flex flex-wrap text-sm gap-2">
              <li class="flex items-center">
                <span>Register,</span>
              </li>
              <li class="flex items-center">
                <span>Login,</span>
              </li>
              <li class="flex items-center">
                <span>Logout,</span>
              </li>
              <li class="flex items-center">
                <span>Server side validation</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
