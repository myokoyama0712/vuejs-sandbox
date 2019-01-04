<template>
<div>
  <div>count: {{ count }}</div>
  <div>squared: {{ squared }}</div>
  <div>
    <button @click="increment">+5</button>
    <button @click="incrementAsync">+1async</button>
  </div>

  <div>名前空間</div>
  <div>triple: {{ triple }}</div>
  <div>
    <button @click="multiplyByFive">5倍</button>
  </div>

  <ul>
    <li><p>各モジュールのステートは、<b>モジュール名を含んだ形で登録される。</b></p></li>
    <li><p>ゲッター、ミューテーション、アクションは規定では<b>ストア上に直接定義したときと同様に作成される。</b></p></li>
    <li><p>ゲッターは名前が衝突するとエラーとなる。</p></li>
    <li><p>ミューテーション、アクションは同じ名前のものが同時に実行される。</p></li>
    <li><p>（ステートはモジュール訳の時点で名前衝突は起こらない。）</p></li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.counter.count	// ステートはモジュール名の下に登録される
    },
    squared() {
      return this.$store.getters.squared	// ゲッターやミューテーション・アクションはモジュールが絡んでも呼び出し方は変わらない
    },
    triple() {
      return this.$store.getters['example/triple']
    },
  },

  methods: {
    // counterモジュール配下のミューテーション・アクションでも呼び出しは通常通り
    increment() {
      this.$store.commit('increment', 5)
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync', { type: 'one' })
    },
    multiplyByFive() {
      this.$store.dispatch('example/multiplyByFive')
    },
  },
}
</script>
