
let multiply = require('./multiply')
console.log('加载 square 模块')

let square = function (num) {
  return multiply.multiply(num, num)
}

module.exports = {
  square: square
}
