module.exports = (file, viewPath = 'views') => {
  if (process.env.NODE_ENV === 'development') {
    return require(`@/${viewPath}/${file}`).default
  } else if (process.env.NODE_ENV === 'production') {
    return () => import(`@/${viewPath}/${file}`).default
  }
}
