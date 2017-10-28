var obj = {
  count: 1
};

function output(obj) {
  var object = Object.assign({}, obj);
  object.count = object.count + 1;
  console.log(object.count);
}

output(obj); //2
console.log(obj.count); //1
