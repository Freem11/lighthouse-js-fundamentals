/*const sayHello = function(name){
  console.log("Hello, " + name)
}

sayHello()
*/
const sayHelloToConsole = function(name){
  console.log("Hello " + name)
  return "Hello" + name
}

sayHelloToConsole("John")

const sayHelloToReturn = function(name){
  return "Hello" + name
}

const greeting = sayHelloToReturn('John')
console.log(greeting)