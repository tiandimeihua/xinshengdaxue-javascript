var jsonfile = require("jsonfile");
var fileRead = "./tmp/data1.json";

// readFile(filename, [options], callback)

jsonfile.readFile(fileRead, function(err, obj) {
  if (err) {
    console.log(err);
  } else {
    console.log(obj);
  }
});
