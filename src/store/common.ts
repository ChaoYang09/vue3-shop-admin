import { defineStore } from 'pinia'

import { IUserinfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER } from '@/utils/constant'
export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      isCollapse: true,
      user: getItem<{ token: string } & IUserinfo>(USER),
    }
  },
  actions: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse
    },
    setUser(payload) {
      this.user = payload
      setItem(USER, payload)
    },
  },

  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       storage: localStorage,
  //       paths: ['user'], //指定要长久化的字段
  //     },
  //   ],
  // },
})
