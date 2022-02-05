module.exports = {
    assetsDir: 'assets',
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
}
