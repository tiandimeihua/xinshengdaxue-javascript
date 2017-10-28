//http://ramda.cn/
const R = require("ramda");

var a1 = [1, 2, [4, 5, 6], { name: "xiaoming" }];

//var a1 = [1, 2, 3];
var a2 = R.clone(a1);

a1[1] = 20;
a2[0] = 10;

console.log(a1);
console.log(a2);

console.log(a1 === a2); //=> false
//console.log(a1[0] === a2[0]); //=> false
