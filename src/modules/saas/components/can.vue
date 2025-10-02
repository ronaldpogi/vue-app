<!-- components/Can.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { useSaasAbility } from '../composables/useSaasAbility';

const props = defineProps<{
  permission?: string
  role?: string
}>()

const { can, is } = useSaasAbility()

const allowed = computed(() => {
  if (props.permission) return can(props.permission)
  if (props.role) return is(props.role)
  return false
})
</script>

<template>
  <slot v-if="allowed"></slot>
</template>
