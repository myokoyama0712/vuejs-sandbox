import { assert } from 'chai'

describe('スプレッド演算子', () => {
  it('オブジェクトの展開', () => {
    const DEFAULT = {
      condition: {
        id: 0,
        name: 'name',
        obj: {
          name: 'name',
          gender: 'male',
        },
      },
      name: 'outer',
      age: 29,
    }

    const actual = {
      ...DEFAULT,
    }

//    assert.equal(actual.condition, {
//      id: 0,
//      name: 'name',
//      obj: {
//        name: 'name',
//        gender: 'male',
//      },
//    })
    assert.equal(actual.condition.id, 0)
    assert.equal(actual.condition.name, 'name')
//    assert.equal(actual.condition.obj, { name: 'name', gender: 'male' })
    assert.equal(actual.condition.obj.name, 'name')
    assert.equal(actual.condition.obj.gender, 'male')

    assert.equal(actual.name, 'outer')
    assert.equal(actual.age, 29)
  })
})
