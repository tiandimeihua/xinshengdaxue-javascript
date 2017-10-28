var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = [];

for (var i = 0; i < publicKeyList.length; i++) {
  var item = publicKeyList[i];
  lengths.push(item.length);
}

console.log(lengths);
