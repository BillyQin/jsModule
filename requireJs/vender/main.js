require(['./square','./add' ], function(squareModule, addModule) {
  console.log(addModule.add(1,1))
  console.log(squareModule.square(3))  
})