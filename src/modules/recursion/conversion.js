export const convertFilterListToTree = list => {

  // 再帰関数
  // left.length: 1, right.length: n-1に再帰的に2分木を構築する
  const convertListToTree = (list, operator) => {
    if (operator === 'OR') {
      if (list.length === 1) {
        return {
          filterType: list[0].filterType,
          operator: list[0].operator,
          value: list[0].value,
        }
      }

      const left = list.slice(0, 1)
      const right = list.slice(1)
      return {
        operator,
        left: {
          filterType: left[0].filterType,
          operator: left[0].operator,
          value: left[0].value,
        },
        right: convertListToTree(right, operator),
      }
    } else {
      if (list.length === 1) {
        return convertListToTree(list[0].orOperandList, 'OR')
      }

      const left = list.slice(0, 1)
      const right = list.slice(1)
      return {
        operator,
        left : convertListToTree(left[0].orOperandList, 'OR'),
        right: convertListToTree(right, operator),
      }
    }
  }

  return convertListToTree(list, 'AND')
}

export const convertFilterTreeToList = tree => {

  // 再帰関数
  // operator引数に合致するオペランドのリストを作成する
  // left firstで深さ優先探索
  const convertTreeToXxxOperandList = (tree, operator) => {
    const andOperandList = []
    if (tree.operator === operator) {
      andOperandList.push(...convertTreeToXxxOperandList(tree.left, operator))
      andOperandList.push(...convertTreeToXxxOperandList(tree.right, operator))
    } else {
      andOperandList.push(tree) // FIXME:? deep copyしないと引数の tree に副作用を伴う
    }

    return andOperandList
  }

  // andOperandListの各andOperandをorOperandのリストにする
  // また、各andOperandに0-basedなidを振る
  const convertAndOperandsToOrOperandLists = andOperandList => {
    for (let i = 0; i < andOperandList.length; i++) {
      andOperandList[i] = {
        andOperandId: i,
        orOperandList: convertTreeToXxxOperandList(andOperandList[i], 'OR'),
      }
    }
  }

  // andOperandList中のすべてのorOperandに0-basedなidを振る
  const numberOrOperandIds = andOperandList => {
    let i = 0
    for (let andOperand of andOperandList) {
      for (let orOperand of andOperand.orOperandList) {
        orOperand.orOperandId = i
        i++
      }
    }
  }

  // 1. treeをandOperandListに変換
  // 2. andOperandListの各andOperandをorOperandのリストにする
  // 3. andOperandList中のすべてのorOperandに0-basedなidを振る
  const list = convertTreeToXxxOperandList(tree, 'AND')
  convertAndOperandsToOrOperandLists(list)
  numberOrOperandIds(list)

  return list
}