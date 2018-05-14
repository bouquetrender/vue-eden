const getters = {
  /* app */
  sidebar: state => state.app.sidebar,
  getSliderState: state => {
    return state.app.sidebar.sliderState === 'full' ? '240px' : '50px'
  },
  /* permission */
  permission_routers: state => state.permission.routers,
  /* user */
  roles: state => state.user.roles
}
export default getters
