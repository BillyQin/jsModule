
console.log('加载 add 模块')
var add = function (x, y) {
  return x + y
}

let count = 1

let addCount = function () {
  // count.value = count.value + 1
  return count++
}

module.exports = {
  add,
  count,
  addCount
}