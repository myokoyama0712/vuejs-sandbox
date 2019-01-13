/*
promise chainによる複数のpromiseの直列実行

`promise` オブジェクトに登録する関数が `promise` オブジェクトを返すようにすれば良い。

以下のコードでは、登録する `then` メソッドは待つことなく実行されているが、
それぞれの `promise` オブジェクトがFulfilled状態になる（ `resolve` が実行されるまで）には時間がかかるため、
ちゃんと所望の動作がなされる。

参考: https://qiita.com/berlysia/items/3aeb1f0ab2494de9e24e

#### 疑問

コールバック関数が `return` する値は `promise` オブジェクトだが、次のコールバック関数に渡っているのは `resolve` に渡している値が伝わっている。
どういうことか？
*/

function callback(wait) {
  console.log(wait)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(wait)
      resolve(wait*2)
    }, wait)
  })
}

promise = Promise.resolve(1000)
promise
  .then(callback)
  .then(callback)
  .then(callback)
