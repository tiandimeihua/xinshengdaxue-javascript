var a = 1;

console.log(1);

function fn() {
  console.log(2);

  console.log("1: " + a); //1:1
  var a = 2;

  bar(); //3:1
  console.log("2: " + a); //2:2
}

console.log(3);

var a = 3;

console.log(4);

function bar() {
  console.log(5);

  console.log("3: " + a);
}

console.log(6);

fn();

//1:undefined
//3:3
//2:2
