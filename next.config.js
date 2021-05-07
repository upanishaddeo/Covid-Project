
global.prod = "production";

  module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
  
      // Important: return the modified config
      return config
    },
  }


  module.exports = {
    env: {
        production: 'https://backend.afinoz.com',
        development:'http://13.127.98.247:8080'
    },
  }


function getBasePathForAwsData() {
    return "http://d1bz2uaiqgodxb.cloudfront.net/data";

}

function getBasePathForS3Urs() {
    return "https://s3.ap-south-1.amazonaws.com/afinoz.static/";
} 

module.exports ={
  getBasePathForAwsData,
  getBasePathForS3Urs
}