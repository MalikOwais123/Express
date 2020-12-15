# YouTube Super Simple webpack Example

After cloning / downloading / forking this repoistory you just need to have a command-line pointing inside this overall directory and use the `npm install` command. This assumes you already have Node.js installed on your computer.
[Here is the YouTube video lesson I made that this repo is about](https://www.youtube.com/watch?v=yR25JoybTxo)


# with using react in webpack we'll have some error's
[like loader not found so first let's try to make a simple react component]

# this type of error you'll found in terminal
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|
| var App = () =>{
>   return <h1>Hello from React!</h1>
| }
|


So now for this we'll use babel loader
 in command line
    yarn add babel-loader @babel/core @babel/preset-eve @babel/preset/react




# HOW TO START THIS PROJECT
`first write the command in terminal`
   yarn 
      it will load all the new dependencies for you on your local machine

`and then to view your web type in terminal`
   yarn run dev
      it is for development mode your localhost : 8080 prt is ready to view your web



# CSS PACKAGES
   css-loader
      It's jobs is to bundle-up all the css file so that they can be import

   style-loader
      Actually this is the loader which is responsible to make the css style workable

   `ONE CONCEPT`
      Notice by this we are importing our css files in JavaScript 
         But what happen if our JS file don't compile in browser so our user cannot be able to see css because
         it is imported by JS
      After ALL we can do it like in traditionally css import


# ADDING SASS SUPPORT IN WEBPACK ?
   herr we have answer {importing two packages for this}
      `yarn add sass sass-loader`

   Now change the rule in config file
      change the type from css to scss
