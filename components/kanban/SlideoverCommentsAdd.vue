<script setup lang="ts">
import * as yup from 'yup'
import type { IComment, IDeal } from '~/types/deals.types'

const props = defineProps<{
  deal: IDeal
}>()

const placeholder = ref('Напишите комментарий...')

const formSchema = toTypedSchema(
  yup.object({
    text: yup
      .string()
      .required('Введите комментарий')
      .min(2, 'Введите минимум 2 символа')
      .max(160, 'Комментарий должен быть не более 160 символов'),
  }),
)

interface ICommentFormState {
  text: string | null
  dealID: string
}

const { handleSubmit, errors, defineField} = useForm<ICommentFormState>({
  validationSchema: formSchema,
  initialValues: {
    dealID: props.deal.$id,
  },
})

const [text] = defineField('text', {

  validateOnChange: false,
  validateOnModelUpdate: false,
  validateOnInput: false,
  validateOnBlur: false
})

// function onSubmit = () => handleSubmit(values => console.log(values) )

const onSubmit = handleSubmit(values=> {
  console.log(values)

  // validate()
})

</script>

<template>
  <form @submit.prevent="onSubmit">
    <UiTextarea
      placeholder="Tell us a little bit about yourself"
      class="resize-none"
      v-model='text'
       />
    <UiButton
      class="float-right mt-5 hover:bg-blue-500"
      variant="outline"
      >Отправить</UiButton
    >
    <div v-if="errors.text">
      {{ errors.text }}
    </div>
  </form>
</template>

<style scoped></style>
