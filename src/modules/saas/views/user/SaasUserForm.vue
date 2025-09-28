<template>
  <div>
    <form class="mt-4 space-y-5" @submit.prevent="handleSubmit">
      <!-- First & Last Name -->
      <div class="flex gap-5">
        <BaseInputGroup
          label="FIRST NAME"
          v-model="saasUserStore.userForm.first_name"
          :error="saasUserStore.errors.first_name"
        />
        <BaseInputGroup
          label="LAST NAME"
          v-model="saasUserStore.userForm.last_name"
          :error="saasUserStore.errors.last_name"
        />
      </div>

      <!-- Email & Phone -->
      <div class="flex gap-5">
        <BaseInputGroup
          label="EMAIL"
          type="email"
          v-model="saasUserStore.userForm.email"
          :error="saasUserStore.errors.email"
        />
        <BaseInputGroup
          label="PHONE"
          type="number"
          v-model="saasUserStore.userForm.phone"
          :error="saasUserStore.errors.phone"
        />
      </div>

      <!-- Single column fields -->
      <BaseInputGroup
        label="ADDRESS"
        v-model="saasUserStore.userForm.address"
        :error="saasUserStore.errors.address"
      />

      <BaseInputGroup
        label="PASSWORD"
        type="password"
        v-model="saasUserStore.userForm.password"
        :error="saasUserStore.errors.password"
      />

      <BaseInputGroup
        label="CONFIRM PASSWORD"
        type="password"
        v-model="saasUserStore.userForm.password_confirmation"
        :error="saasUserStore.errors.password_confirmation"
      />

      <!-- Button -->
      <div class="mt-10">
        <BaseButton
          class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-600 focus:outline-none hover:bg-indigo-500"
          label="SUBMIT"
          type="submit"
          :loading="saasUserStore.loading"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInputGroup from '@/components/ui/BaseInputGroup.vue'
import { useSaasUserStore } from '../../store/saasUserStore'

const saasUserStore = useSaasUserStore()

const emit = defineEmits<{ (e: 'submit'): void }>()

const handleSubmit = () => {
  emit('submit')
}
</script>
