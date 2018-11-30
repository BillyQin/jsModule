define([
  './multiply'
], function(multiplyModule) {
  console.log('加载 square 模块')  
  var square = function(num) {
    return multiplyModule.multiply(num, num)
  }
  return {
    square: square
  }
});