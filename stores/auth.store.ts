export interface IAuthStore {
  email: string
  name: string
  status: boolean
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    name: '',
    status: false,
  },
}

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: (state:{user: IAuthStore}) => state.user.status,
  },
  actions: {
    clear() {
      this.$patch(defaultValue)
    },
    set(input: IAuthStore) {
      this.$patch({ user: input })
    },
  },
})
