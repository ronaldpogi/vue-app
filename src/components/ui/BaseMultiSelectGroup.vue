<template>
  <label class="block flex-1 mt-2">
    <span v-if="label" class="text-[12px] text-brand-dark">{{ label }} :</span>

    <!-- Keep Tailwind OUT of Multiselect itself; just give it a hook class -->
    <Multiselect
      v-model="internalSelection"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      label="name"
      track-by="id"
      placeholder="SELECT..."
      class="base-ms__control"
    />

    <small v-if="error" class="text-red-500 text-xs mt-1">{{ error[0] }}</small>
  </label>
</template>

<script lang="ts" setup>
import type { SaasOptionsInterface } from '@/types/saas'
import { computed } from 'vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

type Id = string | number

const props = defineProps<{
  label?: string
  /** Payload = array of IDs */
  modelValue: (string | number)[] | null
  /** Options provide id + name for display */
  options: SaasOptionsInterface[]
  error?: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Id[] | null): void
}>()

/** id -> option lookup */
const optionById = computed<Record<string, SaasOptionsInterface>>(() => {
  const map: Record<string, SaasOptionsInterface> = {}
  for (const o of props.options) map[String(o.id)] = o
  return map
})

/** vue-multiselect binds to option objects; we convert to/from ID arrays */
const internalSelection = computed<SaasOptionsInterface[] | null>({
  get: () => {
    const ids = props.modelValue ?? []
    if (!Array.isArray(ids)) return []
    return ids
      .map((id) => optionById.value[String(id)])
      .filter(Boolean) as SaasOptionsInterface[]
  },
  set: (selected: SaasOptionsInterface[] | null) => {
    if (!selected || selected.length === 0) emit('update:modelValue', null)
    else emit('update:modelValue', selected.map((o) => o.id))
  },
})
</script>

<style scoped>

</style>
