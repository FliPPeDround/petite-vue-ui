import './switch.scss'

export const pvSwitch = (props: switchProps) => {
  if (!props) {
    console.warn("[pvSwitchWarn] pvSwitch's props missed")
    return {
      $template: ''
    }
  }

  const Vmodel = props.Vmodel ? props.Vmodel : false
  const VmodelChange = Vmodel ? ` @click="${props.Vmodel} = !${props.Vmodel}"` : ''
  const disabled = props.disabled? props.disabled : false
  const name = props.name? props.name : ''
  

  return {
    $template: `
    <div class="pv-switch"
    ${VmodelChange}
    :class="[
      {'is-checked': ${Vmodel}},
      {'is-disabled': ${disabled}}
    ]"
    role="switch"
  >
    <input
      class="pv-switch__input"
      type="checkbox"
      name="${name}"
      v-show="false"
      inactiveValue
      :disabled="${disabled}"
    >
    <span class="pv-switch__core">
      <span class="pv-switch__button"></span>
    </span>
  </div>`,
  }
}