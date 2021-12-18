# petite-vue-ui

`petite-vue-ui` 一个基于petite-vue的Components能力实现的UI库，帮助开发者快速构建小型项目

## 引用


`petite-vue-ui` 同样只需从CDN加载即可：

```html
<script type="module">
  import { createApp } from 'https://unpkg.com/petite-vue?module'
  import { pvButton } from 'https://unpkg.com/petite-vue-ui'
  createApp({
    pvButton
  }).mount()
</script>

<span v-scope="pvButton()"></span>
```
- 使用 `ES module` 来构建一个`petite-vue-ui`项目
- 使用 `v-scope` 来使用组件 => *v-scope="pvButton()"*

## 传参
`petite-vue-ui` 使用数据驱动：
```html
<script type="module">
  import { createApp } from 'https://unpkg.com/petite-vue?module'
  import { pvButton } from 'https://unpkg.com/petite-vue-ui'
  const pvButtonConfig = {
    slot: 'Love from pv-ui',
    type: 'success',
    border: 'round',
    icon: 'pv-icon-like',
    click: 'pvButtonClick'
  }
  createApp({
    pvButton,
    pvButtonConfig,
    pvButtonClick() {
      console.log(`Love from pv-ui  :\)`)
    }
  }).mount()
</script>

<span v-scope="pvButton(pvButtonConfig)"></span>
```

![pvButton效果](https://note.youdao.com/yws/api/personal/file/WEBe81fec9db47bdca6aa75da76a425e98f?method=download&shareKey=8e60c57963bb24b8681025c236931b23)
<br>
<br>

## `petite-vue-ui-button`
<br>

### Button Attributes

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ---- | ---- | ----- | ----   |
| type  | 类型 | String | primary / success / warning / danger / info | primary
| border | 边框 | String | rect / round / circle | rect
|disabled|禁用| Boolean| true / false| false
|icon|图标|String|[图标详情](#petite-vue-ui-icon)| ——
|title|标题|String|——|——|
<br>

### Button Slot
|名称| 说明|
|----| ----|
|slot|按钮容器内容|
<br>

### Button Events
|事件名称| 说明| 使用 |
|----| ----| ----|
|click|当button点击时触发| 传入click事件的名称

## `petite-vue-ui-dialog`
<br>

### Dialog Attributes

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ---- | ---- | ----- | ----   |
| visible | 是否显示 Dialog | String | —— | 'false'
|title|Dialog 的标题，也可通过具名 slot （见下表）传入 | string | —— | '提示'
| width  | Dialog 的宽度 | String | —— | 30%
| top | Dialog CSS 中的 margin-top 值 | String | —— | 15vh
|closeOnClickModal|是否可以通过点击 modal 关闭 Dialog|boolean|true / false|true
|showClose|是否显示关闭按钮|boolean|——|true
<br>

### Dialog Slot
|名称| 说明|
|----| ----|
|titleSlot|Dialog 标题区的内容|
|bodySlot|Dialog 的内容|
|footerSlot|Dialog 按钮操作区的内容|
<br>

### Dialog Events
|事件名称| 说明| 使用 |
|----| ----| ----|
|close|Dialog 关闭的回调| 传入close事件的名称

### 使用示例
```html
<script type="module">
  import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'
  import { pvButton, pvDialog } from 'https://unpkg.com/petite-vue-ui'

  const visible = reactive({
    value: false,
    dialogShow() {
      this.value = true
    }
  })

  const pvButtonConfig = {
    slot: 'open Dialog',
    type: 'primary',
    border: 'round',
    icon: 'pv-icon-respond',
    click: 'visible.dialogShow'
  }

  const pvDialogConfig = {
    visible: 'visible.value',
    bodySlot: 'Hello petite-vue-ui',
    close: 'handleClose'
  }

  const handleClose = () => {
    console.log('Dialog is closed')
  }

  createApp({
    pvButton,
    pvDialog,
    pvButtonConfig,
    pvDialogConfig,
    handleClose,
    visible
  }).mount()
</script>

<span v-scope="pvButton(pvButtonConfig)"></span>
<div v-scope="pvDialog(pvDialogConfig)"></div>
```
## `petite-vue-ui-input`
<br>

### Input Attributes

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ---- | ---- | ----- | ----   |
| type | 类型 | String | text，password 和其他 原生 input 的 type 值 | text
| autofocus | 是否自动获取焦点 | boolean | true / false | false
| Vmodel| v-model	绑定值 | string | —— | ——
| placeholder  | 输入框占位文本 | String | —— | ——
| clearable | 是否可清空 | boolean |true / false | false
|disabled|禁用|boolean|true / false|false
|icon|输入框头部图标|string|[图标详情](#petite-vue-ui-icon)|——
<br>

### Input Events
|事件名称| 说明| 使用 |
|----| ----| ----|
|blur|在 Input 失去焦点时触发| 传入blur事件的名称
|focus|在 Input 获得焦点时触发| 传入focus事件的名称
|change|仅在输入框失去焦点或用户按下回车时触发| 传入change事件的名称
|input|在 Input 值改变时触发| 传入input事件的名称


### 使用示例
```html
<script type="module">
  import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'
  import { pvInput } from 'https://unpkg.com/petite-vue-ui'

const msg = reactive({
  value: 'Love&&Peace'
})

const pvInputConfig = {
  autofocus: true,
  clearable: true,
  placeholder: ':) to you',
  icon: 'pv-icon-search',
  Vmodel: 'msg.value',
  input: 'isInput'
}

const isInput = () => {
  console.log(msg.value)
}

createApp({
  pvInput,
  pvInputConfig,
  msg,
  isInput
}).mount()
</script>

<div v-scope="pvInput(pvInputConfig)"></div>
<div>{{msg.value}}<div>
```
## `Switch`
<br>

### Switch Attributes

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | ---- | ---- | ----- | ----   |
| Vmodel| v-model	绑定值 | string | —— | ——
|disabled|禁用|boolean|true / false|false
|name|switch 对应的 name 属性|string|——|——
<br>


### 使用示例
```html
<script type="module">
  import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'
  import { pvSwitch } from 'https://unpkg.com/petite-vue-ui'

const store = reactive({
  switchOn: true,

  switch: pvSwitch({
    Vmodel: 'store.switchOn'
  })
})

createApp({
  store
}).mount()
</script>

<div v-scope="store.switch"></div>
```