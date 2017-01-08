// one config for one layout page
// any common components we use are included in each
// this can be optimized by creating separate bundle for common components such as libs
// css can also be added here later when less is setup
module.exports = [{
  entry: "./src/auth-app.js",
  output: {
    filename: "build/auth-bundle.js"
  },
  debug: true,
  devtool: "source-map",
},
{
  entry: "./src/admin-app.js",
  output: {
    filename: "build/admin-bundle.js"
  },
  debug: true,
  devtool: "source-map",
}];