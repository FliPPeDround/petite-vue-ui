import './input.scss'

export const pvInput = (props: inputProps) => {
  if (!props) {
    console.warn("[pvInput-Warn] pvInput's props missed")
    return {
      $template: ''
    }
  }
  const disabled = props.disabled ? props.disabled : false
  const placeholder = props.placeholder ? `placeholder="${props.placeholder}"` : ' '
  const type = props.type ? `type="${props.type}"` : `type="text"`
  const name = props.name ? `:name="${props.name}"` : ''
  const autofocus = props.autofocus ? ` autofocus` : ''

  const icon =  {
    show: props.icon ? true : false,
    value: props.icon ? ` ${props.icon}` : ''
  }

  const Vmodel = props.Vmodel ? props.Vmodel : false
  const VmodelBind = Vmodel ? `v-model="${props.Vmodel}"` : ''
  const VmodelClearable = Vmodel ? ` @click="${props.Vmodel} = ''"` : ` @click="pvInputClearValue"`

  const clearable = props.clearable ? props.clearable : false

  const input = props.input ? `@input="${props.input}"` : ''
  const blur = props.blur ? `@blur="${props.blur}"` : ''
  const focus = props.focus ? `@focus="${props.focus}"` : ''
  const change = props.change ? `@change="${props.change}"` : ''
  return {
    $template: `
    <div class="pv-input">
      <span class="iconfont pv-input__prefix${icon.value}" v-if="${icon.show}"></span>
      <input
        id="pvInputId"
        class="pv-input__inner"
        :class="[{'is-disabled': ${disabled}},{'is-icon': ${icon.show}}]"
        ${placeholder}
        ${type}
        ${name}
        :disabled="${disabled}"
        ${autofocus}
        ${VmodelBind}
        ${input}
        ${blur}
        ${focus}
        ${change}
      >
      <span class="iconfont pv-icon-close pv-input__suffix" v-show="${clearable}&&${Vmodel}.length !== 0"${VmodelClearable}></span>
    </div>`,
    pvInputClearValue() {
      (document.getElementById('pvInputId') as HTMLInputElement).value = ''
    }
  }
}