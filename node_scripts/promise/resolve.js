/*
静的メソッド `Promise.resolve(value)` は `new Promise()` のショートカット

すぐに `resolve(42)` と **解決されて** 、次の `then` の `onFulfilled` に設定された関数に 42 という値を渡す。
`Promise.resolve(value)` は `promise` オブジェクトの初期化時やテストコードを書く際に活用できる。

**まとめ: `Promise.resolve` を簡単にまとめると、「渡した値で `Fulfilled` される `promise` オブジェクトを返すメソッド」と考えるのが良い。**
*/

p1 = Promise.resolve(42)

p2 = new Promise((resolve) => {
  resolve(42)
})

p1.then(value => console.log('P1: ' + value))
p2.then(value => console.log('P2: ' + value))
