import { loginbyUser, logout, getUserInfo } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'
import Cookies from 'js-cookie'
import * as types from '../mutaion-types'

const user = {
  state: {
    token: '',
    roles: [],
    name: '',
    avatar: '',
    introduction: ''
  },
  mutations: {
    [types.SET_TOKEN]: (state, token) => {
      state.token = token
    },
    [types.SET_ROLES]: (state, roles) => {
      state.roles = roles
    },
    [types.SET_INTRODUCTION]: (state, introduction) => {
      state.introduction = introduction
    },
    [types.SET_NAME]: (state, name) => {
      state.name = name
    },
    [types.SET_AVATAR]: (state, avatar) => {
      state.avatar = avatar
    }
  },
  actions: {
    loginbyUser({ commit }, { username, password }) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await loginbyUser(username, password)
          if (response.data) {
            commit(types.SET_TOKEN, response.data.token)
            setToken(response.data.token)
            Cookies.set('user', username)
          }
          resolve(response)
        } catch (error) {
          reject(error)
        }
      })
    },
    logout({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          await logout(state.token)
          commit(types.SET_ROLES, '')
          commit(types.SET_ROLES, [])
          Cookies.remove('user')
          removeToken()
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    },
    felogout({ commit }) {
      return new Promise(resolve => {
        commit(types.SET_TOKEN, '')
        removeToken()
        resolve()
      })
    },
    getUserInfo({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await getUserInfo(Cookies.get('user'))
          const { roles, name, avatar, introduction } = response.data

          commit(types.SET_ROLES, roles)
          commit(types.SET_NAME, name)
          commit(types.SET_AVATAR, avatar)
          commit(types.SET_INTRODUCTION, introduction)

          resolve(response)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

export default user
