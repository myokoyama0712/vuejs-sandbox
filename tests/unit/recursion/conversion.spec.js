import { assert } from 'chai'
// import _ from 'lodash'

import { convertFilterListToTree, convertFilterTreeToList } from '@/modules/recursion/conversion.js'
import testLists from './testLists.js'
import testTrees from './testTrees.js'
import cloneTestTrees from './_clone.js'
import zeroLists from './zeroLists.js'
import zeroTrees from './zeroTrees.js'

describe('リストツリーの相互変換', () => {
  it('list -> tree', () => {
    for (let i = 0; i < testLists.length; i++) {
      const tree = convertFilterListToTree(testLists[i])

      assert.deepEqual(tree, testTrees[i])
    }
  })

  it('tree -> list', () => {
    for (let i = 0; i < testTrees.length; i++) {
      const list = convertFilterTreeToList(testTrees[i])

      assert.deepEqual(list, testLists[i])
    }
  })

  it('list -> tree -> list', () => {
    for (let i = 0; i < testLists.length; i++) {
      const tree = convertFilterListToTree(testLists[i])
      const list = convertFilterTreeToList(tree)

      assert.deepEqual(list, testLists[i])
    }
  })

  it('tree -> list -> tree', () => {
    for (let i = 0; i < testTrees.length; i++) {
      const expected = JSON.parse(JSON.stringify(cloneTestTrees[i]))
      const objectTree = JSON.parse(JSON.stringify(testTrees[i]))

      // listの各要素は生成元のtreeのオブジェクトを指している
      const list = convertFilterTreeToList(objectTree)  // objectTree にIDが付与される（副作用）
      const tree = convertFilterListToTree(list)

      assert.deepEqual(tree, expected)
      assert.notDeepEqual(tree, objectTree) // objectTreeが汚染されてしまっている
    }
  })

  // and/orそれぞれのリストで空のものがある場合
  it('list -> tree（例外処理）', () => {
    for (let i = 0; i < zeroLists.length; i++) {
      const tree = convertFilterListToTree(zeroLists[i])

      assert.deepEqual(tree, zeroTrees[i])
    }
  })
  it('tree -> list（例外処理）', () => {
    for (let i = 0; i < zeroTrees.length; i++) {
      const list = convertFilterTreeToList(zeroTrees[i])

      if (i === 0) {
        assert.deepEqual(list, zeroLists[i])
      } else if (i === 1) {
        assert.deepEqual(list, [
          {
            andOperandId: 0,
            orOperandList: [
              {
                orOperandId: 0,
                filterType: 'aaa',
                operator: 'aaa',
                value: 'aaa',
              }
            ],
          },
        ])
      }
    }
  })
})
