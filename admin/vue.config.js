module.exports = {
  devServer: {

    client: {
        overlay: false
    },
},
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
      ? '/admin/dist/'
      : '/'
  }
