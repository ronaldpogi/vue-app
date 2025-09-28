<template>
  <div>
    <BaseConfirm
      v-model="isOpen"
      title="DELETE THIS ACCOUNT ?"
      message="ARE YOU SURE YOU WANT TO DELETE THIS ACCOUNT ? THIS ACTION CANNOT BE UNDONE."
      icon="clarity:warning-line"
      confirm-text="DELETE"
      cancel-text="CANCEL"
      @confirm="handleDelete"
      :loading="saasUserStore.loading"
    />
  </div>
</template>

<script lang="ts" setup>
import BaseConfirm from '@/components/ui/BaseConfirm.vue'
import { computed } from 'vue'
import { useSaasUserStore } from '../../store/saasUserStore'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
})

const saasUserStore = useSaasUserStore()

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value),
})

const handleDelete = () => {
  saasUserStore.destroy(props.userId)
  isOpen.value = false
}
</script>

<style></style>
