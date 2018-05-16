import { loginbyUser, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    roles: []
  },
  mutations: {},
  actions: {
    loginbyUser({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginbyUser(username, password)
          .then(response => {
            if (response.data) {
              commit('SET_TOKEN', response.data.token)
              setToken(response.data.token)
            }
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
