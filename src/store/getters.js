const getters = {
  /* app */
  sidebar: state => state.app.sidebar,
  getSliderStateWidth: state => {
    return state.app.sidebar.sliderState === 'full' ? '240px' : '60px'
  },
  lockState: state => state.app.lock,
  /* permission */
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  /* user */
  roles: state => state.user.roles,
  userInfo: state => state.user
}
export default getters
