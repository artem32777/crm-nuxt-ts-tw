<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { IDeal, EnumColumnStatus } from '~/types/deals.types'
import * as yup from 'yup'

const props = defineProps<{
  status: EnumColumnStatus
  refetch: () => void
}>()

const isOpenForm = ref<boolean>(false)

interface IDealFormState extends Pick<IDeal, 'name' | 'price'> {
  status: string
  customers?: {
    email: string
    name: string
  }
}

const { handleSubmit, defineField, handleReset, values, errors } = useForm<IDealFormState>({
  validationSchema: yup.object({
    name: yup.string().required().min(3).max(20),
    price: yup.number().required().min(1).max(100000000),
  }),
  initialValues: {
    status: props.status,
  },
})

const [name, nameAttrs] = defineField('name')
const [price, priceAttrs] = defineField('price')
const [customerEmail, customerEmailAttrs] = defineField('customers.email')
const [customerName, customerNameAttrs] = defineField('customers.name')

const { mutate, isPending } = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: (data: IDealFormState) => DB.createDocument(DB_ID, COLLECTION_DEALS, uuid(), data),
  onSuccess(data) {
    handleReset()
    props.refetch && props.refetch()
  },
})

const onSubmit = handleSubmit((values) => {
  values.status = props.status
  mutate(values)
})


</script>

<template>
  <div class="mb-2 text-center">
    <KanbanCreateDealBtn @open-form="isOpenForm = !isOpenForm" />
    <form
      @submit.prevent="onSubmit"
      v-if="isOpenForm"
      class="form border-[5px] border-purple-400">
      <UiInput
        class="input"
        v-model="name"
        required=''
        v-bind="nameAttrs"
        placeholder="name" />
      <UiInput
        class="input"
        v-model="price"
        required=''
        v-bind="priceAttrs"
        placeholder="price" />
      <UiInput
        class="input"
        v-model="customerName"
        v-bind="customerNameAttrs"
        required=''
        placeholder="customer name" />
      <UiInput
        class="input"
        v-model="customerEmail"
        type='email'
        required=''
        v-bind="customerEmailAttrs"
        placeholder="customer email" />

      <UiButton
        :disabled="isPending"
        class="btn">
        {{ isPending ? 'wait...' : 'add' }}
      </UiButton>
      <div class="text-red-600">
        {{Object.values(errors)[0]}}
      </div>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply mb-2 border-[#161c26]
  px-2 text-sm text-black transition-colors placeholder:text-[#748092] focus:border-border;
}

.btn {
  @apply block rounded border border-[#161c26] px-2 py-1 text-xs text-[#aebed5] transition-colors hover:border-[#482c65];
}

.form {
  @apply mb-3 block bg-gray-200 p-2 rounded-xl ;
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(-20px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
