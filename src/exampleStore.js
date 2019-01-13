export default {
  // 名前空間が区切られたexampleモジュールを定義
  namespaced: true,

  getters: {
    // 第3引数、第4引数にグローバルな名前空間にアクセスするための
    // rootState, rootGettersが渡される
    // rootState.countを3倍したものを返す
    // **rootは文字通りVuex storeの根を表す（1つ上の親ではない）**
    triple(state, getters, rootState, rootGetters) {
      return rootState.counter.count + rootGetters.double
    },
  },

  actions: {
    // rootState.countを5倍にする
    multiplyByFive(ctx) {
      // グローバルなdoubleゲッターとexampleモジュールのtripleゲッターを利用する
      const payload = ctx.rootGetters.double + ctx.getters.triple

      // グローバルな名前空間のupdateを呼び出したいので、
      // root: trueオプションを付与する
      ctx.commit('update', payload, { root: true })
    },
  },
}
