import Vue from 'vue'
import Vuex from 'vuex'

import example from './exampleStore.js'

Vue.use(Vuex)

// 例示用に非同期処理を行う関数
// 実際のアプリではサーバーからデータを取得する
function getCountNum(type) {
  return new Promise(resolve => {
    // 1秒後にtypeに応じたデータを返す
    setTimeout(() => {
      let amount
      switch (type) {
        case 'one':
          amount = 1
          break
        case 'two':
          amount = 2
          break
        case 'ten':
          amount = 10
          break
        default:
          amount = 0
      }
      resolve({ amount })
    }, 1000)
  })
}

// カウンターモジュールを定義
const counter = {
  // ステート
  state: {
    count: 10,
  },
  // ゲッター
  getters: {
    squared: state => state.count * state.count,

    double: state => state.count + state.count
  },
  // ミューテーション
  mutations: {
    increment(state, amount) {
      state.count += amount
    },

    update(state, payload) {
      state.count = payload
    },
  },
  // アクション
  actions: {
    incrementAsync({ commit }, payload) {
      return getCountNum(payload.type)
              .then(data => {
                commit('increment', data.amount)
              })
    }
  },
  // モジュールは入れ子に定義することができる
  modules: {
    //childModule: {
    //  // ... 入れ子モジュールの定義 ...
    //},
    example,
  },
}

export default new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      { id: 1, name: '牛乳を買う', labelIds: [1, 2], done: false, },
      { id: 2, name: 'Vue.jsの本を買う', labelIds: [1, 3], done: true, },
    ],

    // ラベルの初期ステート
    labels: [
      { id: 1, text: '買い物' },
      { id: 2, text: '食料' },
      { id: 3, text: '本' },
    ],

    // 次に追加するタスクのID
    // 実際のアプリではサーバで生成したり、UUIDを使ったりするがここでは決め打ち
    nextTaskId: 3,
    nextLabelId: 4,

    // フィルタするラベルのID
    filter: null,
  },

  getters: {
    // フィルタ後のタスクを返す
    filteredTasks(state) {
      // ラベルが選択されていなければそのままの一覧を返す
      if (!state.filter) {
        return state.tasks
      }
      // 選択されているラベルでフィルタリングする
      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    },
  },

  // ミューテーションのメソッドの第2引数はpayloadと呼ばれる単一オブジェクト
  mutations: {
    // タスクを追加する
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false,
      })
      // 次に追加されるタスクに付与するIDを更新する
      state.nextTaskId++
    },

    // タスクの完了状態を変更する
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.done = !task.done
      })
    },

    // ラベルを追加する
    addLabel(state, { text }) {
      state.labels.push({ id: state.nextLabelId, text, })
      // 次に追加されるラベルに付与するIDを更新する
      state.nextLabelId++
    },

    // フィルタリング対象のラベルを変更する
    changeFilter(state, { filter }) {
      state.filter = filter
    },

    // ステートを復元する
    restore (state, { tasks, labels, nextTaskId, nextLabelId }) {
      state.tasks = tasks
      state.labels = labels
      state.nextTaskId = nextTaskId
      state.nextLabelId = nextLabelId
    },
  },

  // アクションのメソッドの第1引数はコンテキスト(ctx)というオブジェクトであることに注意
  // 第2引数はミューテーションと同じくpayload
  actions: {
    // ローカルストレージにステートを保存する
    save({ state }) {
      const data = {
        tasks: state.tasks,
        labels: state.labels,
        nextTaskId: state.nextTaskId,
        nextLabelId: state.nextLabelId,
      }
      // Local StorageはdevtoolsのApplicationタブで確認できる
      localStorage.setItem('task-app-data', JSON.stringify(data))
    },

    // ローカルストレージからステートを復元する
    restore({ commit }) {
      const data = localStorage.getItem('task-app-data')
      if (data) {
        commit('restore', JSON.parse(data))
      }
    }
  },

  // counterモジュールをストアに登録
  modules: {
    counter,
  },
})
