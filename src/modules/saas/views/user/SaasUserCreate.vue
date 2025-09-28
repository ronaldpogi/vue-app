<template>
  <BaseModal heading="CREATE" action="CREATE" v-model="isOpen" :showFooter="false">
    <SaasUserForm @submit="handleCreate()" />
  </BaseModal>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import SaasUserForm from './SaasUserForm.vue'
import { useSaasUserStore } from '../../store/saasUserStore'

const saasUserStore = useSaasUserStore()

// define props
const props = defineProps({
  modelValue: { type: Boolean, required: true }
})

// define emits
const emit = defineEmits(['update:modelValue', 'submit'])

// computed wrapper for v-model
const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleCreate = async () => {
  const success = await saasUserStore.store()
  isOpen.value = !success
}
</script>
