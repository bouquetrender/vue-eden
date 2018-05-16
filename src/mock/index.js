import Mock from 'mockjs'
import loginAPI from './login'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginbyUser)

export default Mock
