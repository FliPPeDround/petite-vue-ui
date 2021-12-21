export const getDialogAttr = () => {
  const pvDialogAttr = document.getElementsByTagName('pv-dialog')
  for (let i = 0; i < pvDialogAttr.length; i++) {
    const bodySlot = pvDialogAttr?.[i].children?.['body' as unknown as number]?.outerHTML.slice(20, -11).replace(/[\r\n]/g, "")
    const visible = pvDialogAttr?.[i].attributes?.['visible' as unknown as number]?.value
    const title = pvDialogAttr?.[i].attributes?.['title' as unknown as number]?.value
    const width = pvDialogAttr?.[i].attributes?.['width' as unknown as number]?.value
    const top = pvDialogAttr?.[i].attributes?.['top' as unknown as number]?.value
    const closeOnClickModal = pvDialogAttr?.[i].attributes?.['closeOnClickModal' as unknown as number]?.value
    const showClose = pvDialogAttr?.[i].attributes?.['showClose' as unknown as number]?.value
    pvDialogAttr?.[i].setAttribute('v-scope', `pvDialog({
      ${bodySlot ? "bodySlot:'"+ bodySlot + "'," :''}
      ${visible ? "visible:'"+ visible + "'," :''}
      ${title ? "title:'"+ title + "'," :''}
      ${width ? "width:'"+ width + "'," :''}
      ${top ? "top:'"+ top + "'," :''}
      ${closeOnClickModal ? "closeOnClickModal:'"+ closeOnClickModal + "'," :''}
      ${showClose ? "showClose:'"+ showClose + "'," :''}
    })`)
  }
}