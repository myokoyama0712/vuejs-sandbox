import { assert } from 'chai'

describe('条件演算子の特殊構文', () => {
  it('obj && obj.field', () => {
    const e = {
      eventName: 'テストイベント',
    }
    //const ee = undefined
    const ee = null

    let actual = e && e.eventName
    assert.equal(actual, 'テストイベント')
    actual = ee && ee.eventName   // eeが存在しない場合でもエラーとならない
    //assert.isUndefined(actual)
    assert.isNull(actual)

    switch (e && e.eventName) {
      case 'テストイベント':
        actual = 'テストイベント'
        break
      default:
        actual = 'default'
        break
    }
    assert.equal(actual, 'テストイベント')
    switch (ee && ee.eventName) {
      case 'テストイベント':
        actual = 'テストイベント'
        break
      default:
        actual = 'default'
        break
    }
    assert.equal(actual, 'default')
  })
})
