var array = [1, [1, 2, 3], { name: "array" }];
var array_concat = array.concat();
var array_slice = array.slice();
array_concat[1][0] = 5; //改变array_concat中数组元素的值
console.log(array[1]); //[5,2,3]
console.log(array_slice[1]); //[5,2,3]
array_slice[2].name = "array_slice"; //改变array_slice中对象元素的值
console.log(array[2].name); //array_slice
console.log(array_concat[2].name); //array_slice
