/*
### promise chainでの値渡し

以下の例では、Task Aの処理で **`return`** した値がTask Bが呼ばれるときに引数に設定される。

`return` した値は `Promise.resolve(returnされた値)` のように処理されるため、
**何を `return` しても最終的には新しい `promise` オブジェクトを返す。**

つまり、 `Promise#then` は、単にコールバックとなる関数を登録するだけではなく、
**受け取った値を変化させて別の `promise` オブジェクトを生成するという機能も持っている** ことを覚えておくと良い。
*/

function doubleUp(value) {
  return value*2
}
function increment(value) {
  //return value+1
  throw Error('意図的なエラー')
}
function output(value) {
  console.log(value)
}

let promise = Promise.resolve(1)
promise
  .then(increment)
  .then(doubleUp)
  .then(output)
  .catch((error) => {
    // promise chain中にエラーが発生した場合に呼ばれる
    console.error(error)
  })
