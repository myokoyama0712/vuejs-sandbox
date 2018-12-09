import { BoundedRandomInt } from '@/modules/random/random'
/**
 * legend, xAxis, yAxis, series以外の固定オプションを設定したオブジェクトを返す
 */
export function createCommonGraphOption() {
  return {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox: {
      feature: {
        dataView: {
          title: 'テキスト形式',
          readOnly: true,
          lang: ['テキスト形式', '閉じる']
        },
        saveAsImage: { title: '保存' }
      }
    },
    color: ['#e1504b', '#a06451', '#e49541', '#f3d059', '#aad067',
            '#66bc82', '#4384bd', '#5d48b7', '#b35bc6', '#ea56a3',
            '#ebebeb'],
  }
}
export class EChartsOptions {
  /**
   * EChartsにわたすオプションクラス
   * @param {Object} title - { text: 'グラフタイトル' }
   * @param {Object} legend - { data: ['sub1', 'sub2', 'sub3'] }
   * @param {Object} xAxis - { type: 'value', name: 'x軸ラベル', nameLocation: 'center', min: 0, max: 'dataMax' }
   * @param {Object} yAxis - { type: 'category', nameLocation: 'center', data: ['cate1', 'cate2', 'cate3', 'cate4', 'cate5'] }
   * @param {Object[]} series - [ { name: 'sub1', type: 'bar', stack: 'total', label: { normal: { show: true, position: 'insideRight' } }, data: [1, 2, 3, 4, 5] }, ... ]
   */
  constructor(title, legend, xAxis, yAxis, series) {
    this.title = title
    this.legend = legend
    this.xAxis = xAxis
    this.yAxis = yAxis
    this.series = series
    this.grid = {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
    this.tooltip = {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    }
    this.toolbox = {
      feature: {
        dataView: {
          title: 'テキスト形式',
          readOnly: true,
          lang: ['テキスト形式', '閉じる']
        },
        saveAsImage: { title: '保存' }
      }
    }
    this.color = ['#e1504b', '#a06451', '#e49541', '#f3d059', '#aad067',
                  '#66bc82', '#4384bd', '#5d48b7', '#b35bc6', '#ea56a3',
                  '#ebebeb']
  }
}
/**
 * データ値がランダムな積み上げ棒グラフのモックオプションを作成する関数
 * @param {boolean} isVertical - デフォルトでは積み上げ「縦」棒グラフを作成する
 */
export function generateMockStackOption(isVertical=true) {
  const legend = { data: ['sub1', 'sub2', 'sub3'] }
  const valueAxis = { type: 'value', name: '集計値ラベル', nameLocation: 'center', min: 0, max: 'dataMax' }
  const classificationAxis = { type: 'category', nameLocation: 'center', data: ['cate1', 'cate2', 'cate3', 'cate4', 'cate5'] }
  let xAxis, yAxis
  if (isVertical) {
    xAxis = classificationAxis
    yAxis = valueAxis
  } else {
    xAxis = valueAxis
    yAxis = classificationAxis
  }
  const series = []
  for (let d of legend.data) {
    const s = {}
    s.name = d
    s.type = 'bar'
    s.stack = 'total'
    s.label = { normal: { show: true, position: 'insideRight' } }
    s.data = []
    for (let i = 0; i < classificationAxis.data.length; i++) {
      s.data.push(BoundedRandomInt(1, 10))
    }
    series.push(s)
  }
  return new EChartsOptions(null, legend, xAxis, yAxis, series)
}