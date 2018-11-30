define([], function() {
  console.log('加载 add 模块')
  var add = function(x, y) {
    return x + y
  }
  return {
    add: add
  }
});