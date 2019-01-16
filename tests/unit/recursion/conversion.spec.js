import { assert } from 'chai'
import { convertFilterListToTree, convertFilterTreeToList } from '@/modules/recursion/conversion.js'
import sampleList from './sampleList.js'
import sampleTree from './sampleTree.js'

describe('リストツリーの相互変換', () => {
  it('list -> tree', () => {
    const tree = convertFilterListToTree(sampleList)
    assert.deepEqual(tree, sampleTree)
  })

  it('tree -> list', () => {
    const list = convertFilterTreeToList(sampleTree)
    assert.deepEqual(list, sampleList)
  })

  it('list -> tree -> list', () => {
    const tree = convertFilterListToTree(sampleList)
    const list = convertFilterTreeToList(tree)
    assert.deepEqual(list, sampleList)
  })

  // 副作用を伴うため、これだけは deep equal とならない
  it('tree -> list -> tree', () => {
    const list = convertFilterTreeToList(sampleTree)
    const tree = convertFilterListToTree(list)
    assert.notDeepEqual(tree, sampleTree)
  })
})
