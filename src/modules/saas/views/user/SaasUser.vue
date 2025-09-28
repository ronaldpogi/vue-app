<template>
  <SaasTable
    @updateUser="handleUpdate"
    @deleteUser="handleDelete"
    @createUser="handeCreateUser"
  />

  <!-- short hand for this -->
  <!-- <UserUpdate :modelValue="isOpen" @update:modelValue="isOpen = $event" /> -->
  <SaasUserUpdate v-model="isOpenUpdate" :userId="userId" />
  <SaasDelete v-model="isOpenDelete" :userId="userId" />
  <SaasUserCreate v-model="isOpenCreate" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SaasTable from './SaasUserTable.vue'
import SaasUserUpdate from './SaasUserUpdate.vue'
import SaasDelete from './SaasDelete.vue'
import SaasUserCreate from './SaasUserCreate.vue'

const userId = ref<number>(0)

const isOpenUpdate = ref<boolean>(false)
const isOpenDelete = ref<boolean>(false)
const isOpenCreate = ref<boolean>(false)

const handleUpdate = (id: number) => {
  userId.value = id
  isOpenUpdate.value = true
}

const handleDelete = (id: number) => {
  userId.value = id
  isOpenDelete.value = true
}

const handeCreateUser = () => {
  isOpenCreate.value = true
}

</script>
