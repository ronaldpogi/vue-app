<script lang="ts" setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInputGroup from '@/components/ui/BaseInputGroup.vue'
import { useSaasAuthStore } from '../../store/saasAuthSore'

const saasAuthStore = useSaasAuthStore()

const handleLogin = async () => {
  await saasAuthStore.login()
}
</script>

<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white shadow-md">
      <div class="flex items-center justify-center">
        <!-- YOU CAN ADD LOGO HERE -->
        <div class="flex items-center justify-center text-c">
        <Icon class="text-brand-accent" icon="carbon:ibm-saas-console" width="40" height="40" />
          <span class="mx-2 text-2xl font-semibold text-brand-dark">S a  a S</span>
        </div>
      </div>

      <form class="mt-4" @submit.prevent="handleLogin">
        <!-- email -->
        <BaseInputGroup
          label="EMAIL"
          type="email"
          v-model="saasAuthStore.loginForm.email"
          :error="saasAuthStore.errors.email"
        />

        <!-- password -->
        <BaseInputGroup
          label="PASSWORD"
          type="password"
          v-model="saasAuthStore.loginForm.password"
          :error="saasAuthStore.errors.password"
        />

        <!-- remember me & forgot -->
        <div class="flex items-center justify-between mt-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="text-brand-accent" />
            <span class="mx-2 text-gray-600 text-[11px]">REMEMBER ME</span>
          </label>

          <!-- <a class="block text-brand-accent fontme hover:underline text-[11px]" href="#">
            FORGOT PASSWORD ?
          </a> -->
        </div>

        <!-- actions -->
        <div class="flex flex-col gap-2 mt-6">
          <BaseButton
            class="w-full px-4 py-2 text-sm text-center text-white bg-brand-dark focus:outline-none hover:bg-brand-highlight"
            label="SIGN IN"
            type="submit"
            :loading="saasAuthStore.loading"
          />
          <router-link
            to="register"
            class="block text-brand-accent fontme hover:underline self-center text-[10px]"
          >
            CREATE ACCOUNT ?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
