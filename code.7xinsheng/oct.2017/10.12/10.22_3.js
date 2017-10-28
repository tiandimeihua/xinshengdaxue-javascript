var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = [];
var getLength = publicKeyList.forEach(function(item) {
  lengths.push(item.length);
});

console.log(lengths);
