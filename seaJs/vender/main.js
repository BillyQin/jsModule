define(function(require, exports, module) {
  var squareModule = require('./square');
  console.log(squareModule.square(3))
  var addModule = require('./add');
  console.log(addModule.add(1, 1))
})