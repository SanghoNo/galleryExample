module.exports = {
  devServer: {
    // Paths
    proxy: {
      '/api':{
        target:'http://localhost:8080', // your address
        changeOrigin:true,
        pathRewrite:{
          '^/': '' // url
        }
      }
    }
  }


}