<template>
  <div id="x-spreadsheet-demo"></div>
</template>

<script>
import Spreadsheet from 'x-data-spreadsheet'
// If you need to override the default options, you can set the override
const options = {
  mode: 'edit', // edit | read
  showToolbar: true,
  showGrid: true,
  showContextmenu: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Helvetica',
      size: 10,
      bold: false,
      italic: false,
    },
  },
}
const s = new Spreadsheet('#x-spreadsheet-demo', options)
// const s = new Spreadsheet('#x-spreadsheet-demo')
s.cellText(5, 5, 'xxxx').cellText(6, 5, 'yyy').reRender()
export default {

}
</script>
