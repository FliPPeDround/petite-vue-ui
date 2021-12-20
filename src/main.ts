import { createApp, reactive } from 'petite-vue'
import { pvButton, pvDialog, pvInput, pvSwitch } from './components'

const store = reactive({
  dialogShow() {
    this.visible = true
  },
  handleChange() {
    console.log(123)
  },
  switchOn: true,
  visible: false,
  btn: pvButton({
    slot: '按钮',
    type: 'info',
    click: 'store.dialogShow()'
  }),
  dialog: pvDialog({
    visible: 'store.visible',
    bodySlot: '你好呀！'
  }),
  input: pvInput({}),
  switch: pvSwitch({
    Vmodel: 'store.switchOn'
  })
})
const printA = () => {
  console.log('A')
}

createApp({
  // store,
  pvButton,
  printA,
  pvDialog
}).mount()
