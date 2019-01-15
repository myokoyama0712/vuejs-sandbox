const andOperandList = [
  {
    andOperandId: 0,
    orOperandList: [
      {
        orOperandId: 0,
        filterType: 'aaa',
        operator: 'aaa',
        value: 'aaa',
      },
      {
        orOperandId: 1,
        filterType: 'bbb',
        operator: 'bbb',
        value: 'bbb',
      },
      {
        orOperandId: 2,
        filterType: 'ccc',
        operator: 'ccc',
        value: 'ccc',
      },
    ],
  },
  {
    andOperandId: 1,
    orOperandList: [
      {
        orOperandId: 3,
        filterType: 'ddd',
        operator: 'ddd',
        value: 'ddd',
      },
      {
        orOperandId: 4,
        filterType: 'eee',
        operator: 'eee',
        value: 'eee',
      },
      {
        orOperandId: 5,
        filterType: 'fff',
        operator: 'fff',
        value: 'fff',
      },
    ],
  },
  {
    andOperandId: 2,
    orOperandList: [
      {
        orOperandId: 6,
        filterType: 'ggg',
        operator: 'ggg',
        value: 'ggg',
      },
      {
        orOperandId: 7,
        filterType: 'hhh',
        operator: 'hhh',
        value: 'hhh',
      },
      {
        orOperandId: 8,
        filterType: 'iii',
        operator: 'iii',
        value: 'iii',
      },
    ],
  },
]

// 再帰関数（JSでは関数式で定義した関数も再帰呼び出しできる）
// left.length: 1, right.length: n-1
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

// 再帰関数
// left firstでDFS
// andOperandListをまずは作る
// 次にorOperandListを作る
const convertTreeToList = (tree, operator) => {
  const andOperandList = []
  if (tree.operator === operator) {
    andOperandList.push(...convertTreeToList(tree.left, operator))
    andOperandList.push(...convertTreeToList(tree.right, operator))
  } else {
    andOperandList.push(tree)
  }

  return andOperandList
}

const makeOrOperandList = (andOperandList) => {
  for (let i = 0; i < andOperandList.length; i++) {
    andOperandList[i] = {
      andOperandId: i,
      orOperandList: convertTreeToList(andOperandList[i], 'OR'),
    }
  }
}

const arrangeOrOperandId = (andOperandList) => {
}

const tree = convertListToTree(andOperandList, 'AND')
console.log(JSON.stringify(tree, null, 4))

console.log('------------------------------------')

const list = convertTreeToList(tree, 'AND')
console.log(JSON.stringify({ list }, null, 4))
console.log('------------------------------------')
makeOrOperandList(list)
console.log(JSON.stringify({ list }, null, 4))
