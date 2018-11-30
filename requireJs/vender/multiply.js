define([], function() {
  console.log('加载 multiply 模块')
  var multiply = function(x, y) {
    return x * y
  }
  return {
    multiply: multiply
  }
});