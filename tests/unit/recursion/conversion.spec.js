import { assert } from 'chai'
import { convertFilterListToTree, convertFilterTreeToList } from '@/modules/recursion/conversion.js'
import testLists from './testLists.js'
import testTrees from './testTrees.js'

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

  // 副作用を伴うため、これだけは deep equal とならない
  it('tree -> list -> tree', () => {
    for (let i = 0; i < testTrees.length; i++) {
      const list = convertFilterTreeToList(testTrees[i])  // sampleTreeにIDが付与される（副作用）
      const tree = convertFilterListToTree(list)
      assert.notDeepEqual(tree, testTrees[i])
    }
  })
})
