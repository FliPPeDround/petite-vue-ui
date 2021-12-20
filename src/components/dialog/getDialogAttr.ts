export const getDialogAttr = () => {
  const pvDialogAttr = document.getElementsByTagName('pv-dialog')
  for (let i = 0; i < pvDialogAttr.length; i++) {
    // const text = pvDialogAttr?.[i].textContent || undefined;
    const bodySlot = pvDialogAttr?.[i].children?.['body' as unknown as number].outerHTML.slice(20, -11).replace(/[\r\n]/g, "")
    const visible = pvDialogAttr?.[i].attributes?.['visible' as unknown as number].value
    pvDialogAttr?.[i].setAttribute('v-scope', `pvDialog({
      ${bodySlot ? "bodySlot:'"+ bodySlot + "'," :''}
      ${visible ? "visible:'"+ visible + "'," :''}
    })`)
  }
}