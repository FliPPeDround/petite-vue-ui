import './dialog.scss'

export const pvDialog = (props:dialogProps) => {
  if (!props) {
    console.warn("[pvDialogWarn] pvDialog's props missed")
    return {
      $template: ''
    }
  }
  
  const closeOnClickModal = typeof props.closeOnClickModal === 'boolean' ? props.closeOnClickModal : true
  const showClose =  typeof props.showClose === 'boolean' ? ` v-if="${props.showClose}"` : ''

  const close = props.close ? `;${props.close}()` : ''

  const width = props.width ? props.width : '30%'
  const top = props.top ? props.top : '15vh'

  const visible = props.visible ? props.visible : false
  const clickSelfVisible = props.visible && closeOnClickModal ? ` @click.self="${props.visible} = false${close}"` : ''
  const clickVisible = props.visible ? ` @click="${props.visible} = false${close}"` : ''

  
  const bodySlot = props.bodySlot ? props.bodySlot : ''
  const titleSlot = props.titleSlot || props.title ? props.titleSlot || props.title : '提示'
  const footerSlot = {
    show: props.footerSlot ? true : false,
    value: props.footerSlot ? props.footerSlot : ''
  }

  return {
    $template: 
    `<div class="pv-dialog__wrapper" v-show=${visible}${clickSelfVisible}>
      <div class="pv-dialog" style="width:${width}; margin-top:${top};">
        <div class="pv-dialog__header">
          <span class="pv-dialog__title">${titleSlot}</span>
          <button class="pv-dialog__headerbtn"${clickVisible}${showClose}>
            <span class="iconfont pv-icon-close"></span>
          </button>
        </div>
        <div class="pv-dialog__body">
          ${bodySlot}
        </div>
        <div class="pv-dialog__footer" v-if="${footerSlot.show}">
          ${footerSlot.value}
        </div>
      </div>
    </div>`
  }
}