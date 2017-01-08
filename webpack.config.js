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