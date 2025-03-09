function receivesAFunction(callback) {
  callback();
  return function callback() {
    console.log("Hello, I am callback!");
  };
} 

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("Hello, I am namedFunction!");
  };
}
function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hello, I am an anonymous function!");
  };
}

  