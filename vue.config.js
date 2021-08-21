module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/huella-carbono-admin/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}