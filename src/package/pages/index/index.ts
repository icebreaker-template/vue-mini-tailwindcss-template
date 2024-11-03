import { defineComponent, ref } from '@vue-mini/core'

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini')
  const bg = ref('bg-gradient-to-r from-[#456789] to-[#987654] h-[123.456px] text-[#fafafa] flex items-center justify-center')
  const count = ref(0)
  function addCount() {
    count.value++
  }

  return {
    count,
    greeting,
    bg,
    addCount,
  }
})
