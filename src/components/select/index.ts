import './select.scss'

export const pvSelect = (props: selectProps) => {
  if (!props) {
    console.warn("[pvpvSelectWarn] pvpvSelect's props missed")
    return {
      $template: ''
    }
  }

  return {
    $template: `<div class=></div>`
  }
}