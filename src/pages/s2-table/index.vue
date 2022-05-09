<template>
  <div id="container"></div>
</template>

<script>
import { PivotSheet } from '@antv/s2'
import s2DataConfig from './s2DataConfig'
export default {
  data() {
    return {
      s2DataConfig,
    }
  },
  mounted() {
    const container = document.getElementById('container')
    const s2Options = {
      width: 600,
      height: 600,
      totals: {
        row: {
          showGrandTotals: true,
          showSubTotals: true,
          //   reverseLayout: true,
          //   reverseSubLayout: true,
          subTotalsDimensions: ['province'],
          calcTotals: {
            aggregation: 'SUM',
          },
          calcSubTotals: {
            aggregation: 'SUM',
          },
        },
        col: {
          showGrandTotals: true,
          showSubTotals: true,
          //   reverseLayout: true,
          //   reverseSubLayout: true,
          subTotalsDimensions: ['type'],
          calcTotals: {
            aggregation: 'SUM',
          },
          calcSubTotals: {
            aggregation: 'SUM',
          },
        },
      },
    }
    const s2 = new PivotSheet(container, s2DataConfig, s2Options)
    s2.render()
  },
}
</script>

<style></style>
