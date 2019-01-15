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

andOperandTree = convertListToTree(andOperandList, 'AND')

console.log(JSON.stringify(andOperandTree))
