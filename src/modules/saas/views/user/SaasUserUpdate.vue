<template>
  <BaseModal heading="UPDATE" action="UPDATE" v-model="isOpen" :showFooter="false">
    <SaasUserForm @submit="handleUpdate()" />
  </BaseModal>
</template>

<script lang="ts" setup>
import { computed, watchEffect } from 'vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import SaasUserForm from './SaasUserForm.vue'
import { useSaasUserStore } from '../../store/saasUserStore'

const saasUserStore = useSaasUserStore()

// define props
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  userId: { type: Number, required: true },
})

const handleUpdate = async () => {
  const success = await saasUserStore.update(props.userId)
  isOpen.value = !success
}

// define emits
const emit = defineEmits(['update:modelValue', 'submit'])

// computed wrapper for v-model
const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

watchEffect(() => {
  if (isOpen.value) {
    saasUserStore.show(props.userId)
  }
})
</script>
