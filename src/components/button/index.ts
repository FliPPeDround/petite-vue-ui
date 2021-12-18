import './button.scss'

export const pvButton = (props: buttonProps) => {
  if (!props) {
    console.warn("[pvButtonWarn] pvButton's props missed")
    return {
      $template: ''
    }
  }
  const slot = {
    show: props.slot ? true : false,
    value: props.slot ? props.slot : ''
  }

  const icon =  {
    show: props.icon ? true : false,
    value: props.icon ? ` ${props.icon}` : ''
  }

  const title = props.title ? ` title="${props.title}"` : ''
  const type = props.type ? ` ${props.type}`: ''
  const border = props.border ? ` ${props.border}` : ''
  const disabled = props.disabled ? ' disabled' : ''

  const click = props.click ? ` @click = '${props.click}'` : ''
  return {
    $template: `<button class="pv-button${type}${border}${disabled}"${title}${disabled}${click}>
                  <i class="iconfont${icon.value}" v-if="${icon.show}"></i>
                  <span v-if="${slot.show}">${slot.value}</span>
                </button>`
  }
}