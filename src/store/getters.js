const getters = {
  sidebar: state => state.app.sidebar,
  getSliderState: state => {
    return state.app.sidebar.sliderState === 'full' ? '240px' : '50px'
  }
}
export default getters
