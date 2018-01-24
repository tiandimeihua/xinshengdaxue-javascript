var a; //undefined;
var b = null; //null;
var c = true; //boolean;
var d = 21; //number;
var e = "string"; //string;
var f = function() {
  console.log("I am a function");
}; //function;

var g = {
  name: "object",
  description: "I am an object"
}; //object;

var h = [1, 2, 3, 4, 5]; //array;

var toString = Object.prototype.toString;
function findTypeOfObject(object) {
  //check is it unll first,
  if (null === object) {
    console.log("null");
    return;
  }

  //find the type of object by typeof;
  var type = typeof object;

  //if it is object then find whether obect or array;
  //otherwise just console.log the result of typeof;
  if (type === "object") {
    console.log(toString.call(object));
  } else {
    switch (type) {
      case "undefined":
        console.log(type);
        break;
      case "boolean":
        console.log(type);
        break;
      case "number":
        console.log(type);
        break;
      case "string":
        console.log(type);
        break;
      case "symbol":
        console.log(type);
        break;
      case "function":
        console.log(type);
        break;
      default:
        console.log("unknow");
        break;
    }
  }
}

findTypeOfObject(a);
findTypeOfObject(b);
findTypeOfObject(c);
findTypeOfObject(d);
findTypeOfObject(e);
findTypeOfObject(f);
findTypeOfObject(g);
findTypeOfObject(h);
