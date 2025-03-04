import { createApp } from '@vue-mini/core'

createApp(() => {
  console.log('App Launched!')

  const worker = wx.createWorker('workers/index.js')

  worker.postMessage({
    msg: 'hello worker',
  })
})
