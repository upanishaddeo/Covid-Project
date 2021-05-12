// global.prod = "production";
module.exports = {
  env: {
    development:"http://13.127.98.247:8080",
    production:"https://backend.afinoz.com"
  },
}



// Example config for adding a loader that depends on babel-loader
// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: pluginOptions.options,
//         },
//       ],
//     });

//     return config;
//   },
// };

// module.exports = (config, { dev }) => {
//     config.module.rules.push({
//       test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//       loader: "file-loader",
//       options: {
//         name: "public/media/[name].[ext]",
//         publicPath: (url) => url.replace(/public/, ""),
//       },
//     });
//     return withCss(config);
//   };


