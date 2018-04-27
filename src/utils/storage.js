const storage = (function () {
  const localStorage = window.localStorage
 
  function set (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }
 
  function get (key) {
    const value = localStorage.getItem(key) || ''
 
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
 
  function remove (key) {
    localStorage.removeItem(key)
  }
 
  return {
    set: set,
    get: get,
    remove: remove
  }
}())
 
export default storage
