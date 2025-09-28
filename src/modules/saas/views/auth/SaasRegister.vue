<template>
  <div class="flex items-center justify-center h-screen px-6 bg-brand">
    <div class="w-full max-w-md p-6 bg-brand-white shadow-md">

      <div class="flex items-center justify-center text-c">
        <Icon class="text-brand-accent" icon="carbon:ibm-saas-console" width="40" height="40" />
        <span class="mx-2 text-2xl font-semibold text-brand-accent">S a  a S</span>
      </div>

      <form class="mt-4" @submit.prevent="handleRegister">
        <!-- Company Name -->
        <BaseInputGroup
          label="COMPANY NAME"
          v-model="saasAuthStore.registerForm.name"
          :error="saasAuthStore.errors.name"
        />

        <!-- Subdomain -->
        <BaseInputGroup
          label="COMPANY SUBDOMAIN"
          v-model="saasAuthStore.registerForm.subdomain"
          :error="saasAuthStore.errors.subdomain"
        />

        <p class="text-brand-dark text-[11px] italic font-semibold">
          For now, the app doesn’t support email sending. Please copy this domain so you won’t forget it, as this will be your assigned domain.
        </p>

        <a
          v-if="subDomain"
          class="block text-brand-red self-center text-[12px] font-semibold"
          :href="`https://${subDomain}.ronald-bibon.click`"
          target="_blank"
        >
          {{ `https://${subDomain}.ronald-bibon.click` }}
        </a>
        <p
          v-else
          class="block text-brand-red self-center text-[12px] font-semibold"
        >
          please enter your subdomain!
        </p>

        <!-- Address -->
        <BaseInputGroup
          label="COMPANY ADDRESS"
          v-model="saasAuthStore.registerForm.address"
          :error="saasAuthStore.errors.address"
        />

        <!-- Email -->
        <BaseInputGroup
          label="EMAIL"
          type="email"
          v-model="saasAuthStore.registerForm.email"
          :error="saasAuthStore.errors.email"
        />

        <!-- Password -->
        <BaseInputGroup
          label="PASSWORD"
          type="password"
          v-model="saasAuthStore.registerForm.password"
          :error="saasAuthStore.errors.password"
        />

        <!-- Confirm Password -->
        <BaseInputGroup
          label="CONFIRM PASSWORD"
          type="password"
          v-model="saasAuthStore.registerForm.password_confirmation"
          :error="saasAuthStore.errors.password_confirmation"
        />

        <!-- Phone -->
        <BaseInputGroup
          label="PHONE"
          type="number"
          v-model="saasAuthStore.registerForm.phone"
          :error="saasAuthStore.errors.phone"
        />

        <!-- Buttons -->
        <div class="flex flex-col gap-2 mt-6">
          <BaseButton
            class="w-full px-4 py-2 text-sm text-center text-white bg-brand-dark focus:outline-none hover:bg-brand-highlight"
            label="REGISTER"
            type="submit"
            :loading="saasAuthStore.loading"
          />
          <router-link to="login" class="block text-brand-accent hover:underline self-center text-[10px]">
            ALREADY HAVE AN ACCOUNT ?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import BaseInputGroup from '@/components/ui/BaseInputGroup.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useSaasAuthStore } from '../../store/saasAuthSore'

const saasAuthStore = useSaasAuthStore()

const subDomain = computed(() => saasAuthStore.registerForm.subdomain)

const handleRegister = async () => {
  await saasAuthStore.register()
}
</script>
