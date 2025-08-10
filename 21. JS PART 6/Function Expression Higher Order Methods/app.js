/*

Function Expressions

  const variable = function(arg1, arg2 .. ) {
    //do or return something

  }

  const sum = function(a, b) {
    return a + b;
  }
  sum(2,3);

*/

const sum  = function(a, b){
  return a + b;
}

console.log(sum(2, 2));

/*
Higher Order Functions
  A function that does one or both :

    · takes one or multiple functions as arguments

    · returns a function


    Takes one or multiple functions as arguments
---------------------------------------------------
    function multipleGreet(func, n) {
      for(let i=1; i <= n; i++) {
        func();
      }
    }

    let greet = function() {
      console. log("hello");
    }
    multipleGreet(greet, 2);



*/

function multipleGreet(func, n) {
  for(let i=1; i <= n; i++) {
    func();
  }
}

let greet = function() {
  console. log("hello");
}
multipleGreet(greet, 2);


/*

Returns a function

function oddEvenTest(request) {
  if(request == "odd") {
    return function(n) {
      console.log(!(n%2 == 0));
    }
  } 
  else if(request == "even") {
    return function(n) {
      console.log(n%2 == 0);

    } 
  else{
    console. log("wrong request");
  }
}


*/


function oddEvenTest(request) {
  if(request == "odd") {
    return function(n) {
      console.log(!(n%2 == 0));
    }
  } 
  else if(request == "even") {
    return function(n) {
      console.log(n%2 == 0);

    }
  }   
  else{
    console. log("wrong request");
  }
}

let fun = oddEvenTest("odd");
fun(3);
