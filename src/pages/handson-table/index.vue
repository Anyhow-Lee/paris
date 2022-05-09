<template>
  <hot-table :data="data" :licenseKey="licenseKey" :slot="true" :settings="settings"></hot-table>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import { registerAllModules } from 'handsontable/registry'
import { HyperFormula } from 'hyperformula'

// register Handsontable's modules
registerAllModules()

export default {
  data: function () {
    return {
      data: [
        ['（一）直接费', '', ''],
        ['1、人工费', '=SUM(B3:B4)', ''],
        ['（1)专职研究人员费用', '', ''],
        ['（2）临时性研究人员费', '', ''],
        ['2、设备费', '', ''],
        ['（1）仪器、设备使用费', '', ''],
        ['（2）仪器、设备试制费', '', ''],
        ['（3）软件使用费', '', ''],
        ['3、业务费', '', ''],
        ['（1）材料费', '', ''],
        ['（2）资料费', '', ''],
        ['（3）印刷出版费', '', ''],
        ['（4）专利与知识产权事务费', '', ''],
        ['（5）会议费', '', ''],
        ['（6）差旅费', '', ''],
        ['（7）培训费', '', ''],
        ['4、场地使用费', '', ''],
        ['（1）场地物业费', '', ''],
        ['（2）场地使用租金', '', ''],
        ['5、专家咨询费', '', ''],
        ['（二）间接费', '', ''],
        ['（1）间接费', '', ''],
        ['（三）外委支出', '', ''],
        ['（1）外委研究支出', '', ''],
        ['（2）仪器设备租赁费', '', ''],
        ['（3）外协测试试验与加工费', '', ''],
        ['（四）税金', '', ''],
        ['（1）税金', '', ''],
        ['合计', '=B1+B21+B23+B27', ''],
      ],
      licenseKey: 'non-commercial-and-evaluation',
      settings: {
        colHeaders: ['科目名称', '预算金额', '备注'],
        formulas: { engine: HyperFormula },
        colWidths: [200, 200, 200],
        columns: [{ readOnly: true }, { data: 2, type: 'numeric' }, { data: 3, type: 'text', readOnly: true }],
      },
    }
  },
  components: {
    HotTable,
  },
}
</script>

<style src="./handsontable.full.css"></style>
