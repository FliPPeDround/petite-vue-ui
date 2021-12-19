export const getButtonAttr = () => {
  const pvButtonAttr = document.getElementsByTagName('pv-button')
  for (let i = 0; i < pvButtonAttr.length; i++) {
    const text = pvButtonAttr?.[i].textContent || undefined;
    const icon = pvButtonAttr?.[i].attributes?.['icon' as unknown as number]?.value
    const type = pvButtonAttr?.[i].attributes?.['type' as unknown as number]?.value
    const disabled = pvButtonAttr?.[i].attributes?.['disabled' as unknown as number]?.value
    const border = pvButtonAttr?.[i].attributes?.['border' as unknown as number]?.value
    const onclick = pvButtonAttr?.[i].attributes?.[('onclick'|| '@click') as unknown as number]?.value
    if (onclick) {
      pvButtonAttr?.[i].removeAttribute('onclick'|| '@click')
    }
    pvButtonAttr?.[i].setAttribute('v-scope', `pvButton({
      ${text ? "slot:'"+ text + "'," :''}
      ${icon ? "icon:'"+ icon + "'," :''}
      ${type ? "type:'"+ type + "'," :''}
      ${disabled ? "disabled:'"+ disabled + "'," :''}
      ${border ? "border:'"+ border + "'," :''}
      ${onclick ? "click:'"+ onclick + "'," :''}
    })`)
  }
}