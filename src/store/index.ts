import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import type { IUserInfo } from '@/api/type/common'

export interface State {
  count: number
  foo: string
  isCollapse: boolean
  user: IUserInfo | null
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: 'store.state.foo',
      isCollapse: false,
      user: JSON.parse(window.localStorage.getItem('user') || 'null')
    }
  },
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    increment (state) {
      state.count++
    },
    setUser (state, payload) {
      state.user = payload
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
