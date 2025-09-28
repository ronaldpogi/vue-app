<script lang="ts" setup>
import { onMounted } from 'vue'
import { useSaasUserStore } from '../../store/saasUserStore'
import BaseTable from '@/components/ui/BaseTable.vue';
import type { SaasParamsInterface } from '@/types/saas';

const saasUserStore = useSaasUserStore()

const emit = defineEmits<{
  (e: 'updateUser', id: number): void
  (e: 'deleteUser', id: number): void
  (e: 'createUser') : void
}>()

const handleUpdate = (id: number) => {
  emit('updateUser', id)
}

const handleDelete = (id: number) => {
  emit('deleteUser', id)
}

const handleCreate = () => {
  emit('createUser')
}

onMounted(() => {
  saasUserStore.index()
})
</script>

<template>
  <BaseTable
    title="USERS"
    :columns="saasUserStore.columns"
    :rows="saasUserStore.users"
    :total="saasUserStore.total"
    :loading="saasUserStore.loading"
    :page="saasUserStore.params.page"
    :pageSize="saasUserStore.params.pageSize"
    showFilters
    @update:params="(params: SaasParamsInterface) => saasUserStore.index(params)"
    @rowUpdate="handleUpdate"
    @rowDelete="handleDelete"
    @rowCreate="handleCreate"
  >
    <template #user="{ row }">
      <div class="flex items-center">
        <img :src="row.picture" class="w-10 h-10 rounded-full" />
        <span class="ml-3">{{ row.name }}</span>
      </div>
    </template>
  </BaseTable>
</template>



<style>

</style>
