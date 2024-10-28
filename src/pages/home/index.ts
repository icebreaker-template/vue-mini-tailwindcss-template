import { defineComponent, ref } from '@vue-mini/core'

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini')
  const bg = ref('bg-[#3532ff] h-[323px] text-[#fafafa] flex items-center')
  return {
    greeting,
    bg,
  }
})
