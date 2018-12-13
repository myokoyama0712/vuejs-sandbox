/**
まずは非同期処理は `promise` オブジェクトで包み込むことから考える。
*/

const initVal = 1
let p = new Promise((resolve, reject) => {
  resolve(initVal)
})

p.then((value) => {
  console.log('最初のthenのvalue: ' + value)
}).then((value) => {
  console.log('2つ目のthenのvalue: ' + value)
  setTimeout(() => {
    console.log('2つ目のthenのsetTimeout関数実行')
  }, 1000);
}).then((value) => {
  console.log('3つ目のthenのvalue: ' + value)
  setTimeout(() => {
    console.log('3つ目のthenのsetTimeout関数実行')
  }, 1000);
})
