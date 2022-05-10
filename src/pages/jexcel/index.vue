<template>
  <div id="my-spreadsheet"></div>
</template>

<script>
import jspreadsheet from 'jspreadsheet-ce'

export default {
  data() {
    return {
      data: [
        ['（一）直接费', '=SUM(B2,B5,B9,B17,B20)', ''],
        ['1、人工费', '=SUM(B3:B4)', ''],
        ['（1)专职研究人员费用', '', ''],
        ['（2）临时性研究人员费', '', ''],
        ['2、设备费', '=SUM(B6:B8)', ''],
        ['（1）仪器、设备使用费', '', ''],
        ['（2）仪器、设备试制费', '', ''],
        ['（3）软件使用费', '', ''],
        ['3、业务费', '=SUM(B10:B16)', ''],
        ['（1）材料费', '', ''],
        ['（2）资料费', '', ''],
        ['（3）印刷出版费', '', ''],
        ['（4）专利与知识产权事务费', '', ''],
        ['（5）会议费', '', ''],
        ['（6）差旅费', '', ''],
        ['（7）培训费', '', ''],
        ['4、场地使用费', '=SUM(B18:B19)', ''],
        ['（1）场地物业费', '', ''],
        ['（2）场地使用租金', '', ''],
        ['5、专家咨询费', '', ''],
        ['（二）间接费', '=SUM(B22:B22)', ''],
        ['（1）间接费', '', ''],
        ['（三）外委支出', '=SUM(B24:B26)', ''],
        ['（1）外委研究支出', '', ''],
        ['（2）仪器设备租赁费', '', ''],
        ['（3）外协测试试验与加工费', '', ''],
        ['（四）税金', '=SUM(B28:B28)', ''],
        ['（1）税金', '', ''],
        ['合计', '=B1+B21+B23+B27', ''],
      ],
    }
  },
  mounted() {
    jspreadsheet(document.getElementById('my-spreadsheet'), {
      data: this.data,
      columns: [
        { title: '科目名称', width: 300, readOnly: true },
        { title: '预算金额', width: 300, type: 'numeric' },
        { title: '备注', width: 300 },
      ],
      updateTable: function (el, cell, x, y, source, value, id) {
        if (x === 1) {
          if (y === 0 || y === 1 || y === 4 || y === 8 || y === 16 || y === 20 || y === 22 || y === 26 || y === 28) {
            cell.classList.add('readonly')
          }
        }
      },
      style: {
        B1: 'background-color: #f2f2f2; color:#595959;',
        B2: 'background-color: #f2f2f2; color:#595959;',
        B5: 'background-color: #f2f2f2; color:#595959;',
        B9: 'background-color: #f2f2f2; color:#595959;',
        B17: 'background-color: #f2f2f2; color:#595959;',
        B21: 'background-color: #f2f2f2; color:#595959;',
        B23: 'background-color: #f2f2f2; color:#595959;',
        B27: 'background-color: #f2f2f2; color:#595959;',
        B29: 'background-color: #f2f2f2; color:#595959;',
      },
    })
  },
}
</script>

<style src="./jspreadsheet.css"></style>
