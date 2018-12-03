var add = require('./add')

console.log(add.add(1,1))
var square = require('./square')
console.log(square.square(3))

console.log(add.count)
add.addCount()

console.log('count', add.count)