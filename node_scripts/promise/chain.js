/**
まずは非同期処理は `promise` オブジェクトで包み込むことから考える。
*/

function antiPattern() {
  const initVal = 1
  let p = new Promise((resolve, reject) => {
    resolve(initVal)
  })

  p.then((value) => {
    console.log('最初のthenのvalue: ' + value)
    return value+1
  }).then((value) => {
    console.log('2つ目のthenのvalue: ' + value)
    setTimeout(() => {
      console.log('2つ目のthenのsetTimeout関数実行')
    }, 1000);
    return value+1
  }).then((value) => {
    console.log('3つ目のthenのvalue: ' + value)
    setTimeout(() => {
      console.log('3つ目のthenのsetTimeout関数実行')
    }, 1000);
  })
}

/**
 * MDN
 */
function asyncToSync() {
  const firstThen = Promise.resolve("foo")
  // 1. Receive "foo" concatinate "bar" to it and resolve that to the next then
  .then(function(string) {
    console.log('--- First Then Start ---')
//    return new Promise(function(resolve, reject) {
//      setTimeout(function() {
//        console.log('First Sentence')
//        string += 'bar';
//        resolve(string);
//      }, 1);
//    });
    const p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('First Sentence')
        string += 'bar';
        resolve(string);
      }, 1);
    });
    p.sign = 'is equal?'
    return p
  })
  console.log('--- TEST ---')
  console.log(firstThen)
  console.log(firstThen.sign)

  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  const secondThen = firstThen.then(function(string) {
    console.log('--- Second Then Start ---')
    console.log(firstThen)
    setTimeout(function() {
      string += 'baz';
      console.log('Second Then: ' + string);
    }, 1)
    // 以下のreturn文をコメントアウトした結果も調べてみること
    return string;
  })

  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asynchronous code in the
  // prior then block.  
  // secondThenはすぐさま 'foobar' をvalueとしてresolveしてしまう
  const thirdThen = secondThen.then(function(string) {
    console.log('--- Third Then Start ---')
    console.log(secondThen)
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This 
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log('Third Then: ' + string);
  });

  console.log('out of promise chain')
}

/**
 * rejectedなPromiseのコンソール表示テスト
 */
function printRejectedPromise() {
  const p = Promise.reject(Error('mock error'))
  console.log(p)
}

/**
 * chainにおけるcatchの動作確認
 */
function catchTest() {
  const initVal = 1
  let p = new Promise((resolve, reject) => {
    resolve(initVal)
  })

  p.then((value) => {
    console.log('最初のthenのvalue: ' + value)
    throw Error('意図的なエラー')
    return value+1
  }).then((value) => {
    console.log('2つ目のthenのvalue: ' + value)
    setTimeout(() => {
      console.log('2つ目のthenのsetTimeout関数実行')
    }, 1000);
    return value+1
  }).then((value) => {
    console.log('3つ目のthenのvalue: ' + value)
    setTimeout(() => {
      console.log('3つ目のthenのsetTimeout関数実行')
    }, 1000);
  }).catch((reason) => {
    console.log('--- catch start ---')
    console.log(reason)
  })
}

catchTest()
