let a1 = [1, 2, 3, [5, 6, 7], { name: "xiao ming" }];
let a2 = [];


//a2 = JSON.parse(JSON.stringify(a1));

//a2 = a1;
//a2 = Object.assign([], a1);
//a2 = a1.slice(0);
//a2 = a1.concat();

/**
a1.forEach(function(element) {
  a2.push(element);
});
*/

/** 
for (var i = 0; i < a1.length; i++) {
  a2.push(a1[i]);
}
*/

a2[3][2] = 4;
//a1[1] = 5;

console.log(a1);
console.log(a2);
