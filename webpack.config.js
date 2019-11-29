// entry kisko dekh ke konsa main file hai like bohot saara files hai usme se konsa main hai 
/**
 * Output: Bata ta hai ki me jo bhi entry me likh raha hu voh sab mere konse file me bundle hone chahye ki jitne bhi files hai voh sab ko jama kar and then usko ek file me rakh de
 * Module: bata ta hai ki me konsa modules use kar raha hu which will be of different format
 * For babel module there are set of rules
 * Then devserver configurations
 * publicPath kidr rakhna hai bundled js
 * contentBase saare static files ko kidr rakhne ka
 * join() is same as resolev
 * Async and await is not supported so babelPolyfill came into picture 
 * Uske baad babelPolyfill
 * 
 */

 const path = require('path');

 module.exports={
     entry:{
         app: ['@babel/polyfill','./src/app.js']
     },
     output:{
         path: path.resolve(__dirname,'dist'),
         filename: 'app.bundle.js'
     },
    //  This line is used kyuki abhi hamlog ka jo dev server hai voh app.js ko baar baar bundle nai karta hai  
     watch:true,
     module:{
         rules: [{
             test: /\.js$/,
             exclude: /(node_modules)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env']
                 }
             }
         }]
     },
     devServer:{
        //  Yeh wala line use hota hai kyuki abhi agar dist ke andr mera kuch folder rahega scripts karke toh me devserver ko bolunga ki  idr mera path pada hai
         // publicPath: '/scripts/'
         contentBase: path.join(__dirname,'dist'),
         watchContentBase: true,
         open: true
     }
 }