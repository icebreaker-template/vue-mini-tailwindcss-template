import { defineComponent, ref } from '@vue-mini/core'

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini')
  const bg = ref('bg-gradient-to-r from-[#456789] to-[#987654] h-[123.456px] text-[#fafafa] flex items-center justify-center')
  const count = ref(0)
  function go2subpackgae() {
    count.value++
    console.log('go2subpackgae')
    wx.navigateTo({
      url: '/package/pages/index/index',
    })
  }

  return {
    count,
    greeting,
    bg,
    go2subpackgae,
  }
})
