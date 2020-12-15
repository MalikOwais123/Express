const path = require("path");

module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
  },

  //Here we'll set some rule for our loader
  module: {
    rules: [
      //we will tell it to apply only apply loader to our CSS files not every file in our project    
      {
        // for this we need two loader that should be added from yarn add
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },

      //we will tell it to apply only apply loader to our javacript files not every file in our project
      {
        //here we test for regular expression by using / / operator
        //inside it we will give type of file and apply \ for escape
        //$ means we are looking this only with the end of every files
        test: /\.js$/,
        exclude: / (node_modules|yarn_components) /,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
