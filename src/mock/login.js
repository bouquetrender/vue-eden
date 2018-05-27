import queryString from 'query-string'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: 'i am admin',
    avatar: 'https://i.loli.net/2018/05/26/5b0930d3ab3aa.jpg',
    name: 'Admin'
  },
  sakuya: {
    roles: ['sakuya'],
    token: 'sakuya',
    introduction: 'i am sakuya',
    avatar: 'https://i.loli.net/2018/05/26/5b0930d3ab3aa.jpg',
    name: 'Sakuya'
  }
}

export default {
  loginbyUser: config => {
    let { username } = JSON.parse(config.body)
    let response = {}
    if (username in userMap) {
      response = {
        code: 200,
        data: userMap[username],
        message: 'Login success, Welcome'
      }
    } else {
      response = {
        code: 200,
        data: null,
        message: 'Login failed, User does not exist'
      }
    }
    return response
  },
  logout: () => {
    return {
      code: 200,
      data: {
        state: 1
      },
      message: 'Logout success'
    }
  },
  info: config => {
    let params = queryString.parse(config.url.replace(/^\S+(?=\?)/, ''))
    let response = {
      code: 200,
      data: userMap[params.username],
      message: 'Login success, Welcome'
    }
    return response
  }
}
