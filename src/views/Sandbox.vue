<template>
<div>
  <e-charts class="widget-graph" :options="testOption"/>
  <hr>

  <div>
    <div>v-forとpropsに関する実験</div>
    <v-for-props v-for="(p, idx) in people" :key="idx"
                  :id="p.id" :name="p.name" :age="p.age"></v-for-props>
  </div>
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
import VForProps from '@/components/vforprops/VForProps.vue'

export default {
  data() {
    const sample = generateMockStackOption()
    const people = [
      { id: 1, name: 'aaa', age: '26', },
      { id: 2, name: 'bbb', age: '27', },
      { id: 3, name: 'ccc', age: '28', },
    ]

    return {
      testOption: sample,
      people,
    }
  },

  components: {
    ECharts,
    VForProps,
  },
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
