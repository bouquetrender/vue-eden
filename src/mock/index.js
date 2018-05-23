import Mock from 'mockjs'
import loginAPI from './login'

const openMock = true

if (openMock) {
  Mock.mock(/\/login\/login/, 'post', loginAPI.loginbyUser)
  Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
  Mock.mock(/\/user\/info/, 'get', loginAPI.info)
}

export default Mock
