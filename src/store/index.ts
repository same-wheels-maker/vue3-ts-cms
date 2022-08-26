import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from '@/store/login/login'
import system from '@/store/main/system/system'
import { IRootState, IStoreType } from '@/store/types'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 0
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export const useStore = (): Store<IStoreType> => {
  return useVuexStore()
}

export default store
