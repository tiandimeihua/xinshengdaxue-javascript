var obj = {
  count: 1
};

function output(obj) {
  obj.count = obj.count + 1;
  console.log(obj.count);
}

output(obj); //2
console.log(obj.count); //2
