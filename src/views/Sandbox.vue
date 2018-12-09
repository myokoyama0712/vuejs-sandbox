<template>
<div>
  <e-charts class="widget-graph" :options="testOption"/>
</div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox/'

import { generateMockStackOption } from "@/components/graph/echartsOption.js";

export default {
  data() {
    const sample = generateMockStackOption()
    
    return {
      testOption: sample
    }
  },

  components: {
    ECharts
  }
}
</script>

<style scoped>
.widget-graph {
  width: 300px;
  height: 300px;
  float: left;
  margin: 10px;
}
</style>
