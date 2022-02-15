// Modules - Encapsulated code (only share minimum)
// CommonJS(underhood) , every file is module (by default)

// const { version } = require("os")

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// require('./7-mind-grenede')
// console.log(data);
// console.log(names);
// sayHi(names.john);
// sayHi(names.peter);
// sayHi('susan');
// sayHi(data.singlePerson.name);

// Built-in Modules 
//************************************************************************/
// 54:00 ----->>> Built in Modules

// os module

// require('./8-os-module')

// const path = require('path')

// HTTP


// ****************************************************************

// 148:00 ---> NPM 

// npm - global command
// npm --version

// local dependency - use it in any Project 
// npm i <packageName>
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - mainfest file (stores important info about project/package)
// manual approach (create package.json in the root  , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]] 
const newItems = _.flattenDeep(items)
console.log(newItems)