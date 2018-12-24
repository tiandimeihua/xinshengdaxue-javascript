var jsonfile = require("jsonfile");

var fileWriteWithoutFormat = "./tmp/data2.json";
var fileWriteWithFormatWithSpaces = "./tmp/data3.json";
var fileWriteWithOverridingEOL = "./tmp/data4.json";

var obj = [
  {
    name: "xuShuai",
    age: "18"
  },
  {
    name: "xiaoMing",
    age: "18"
  }
];

//writeFile(filename, obj, [options], callback)

jsonfile.writeFile(fileWriteWithoutFormat, obj, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("writeFile done");
  }
});

//formatting with spaces:

jsonfile.writeFile(fileWriteWithFormatWithSpaces, obj, { spaces: 2 }, function(
  err
) {
  if (err) {
    console.log(err);
  } else {
    console.log("formatting with spaces done");
  }
});

//overriding EOL:

jsonfile.writeFile(
  fileWriteWithOverridingEOL,
  obj,
  { spaces: 2, EOL: "\r\n" },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("overriding EOL done");
    }
  }
);
