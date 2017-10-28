//引用第三方库；
const jsonfile = require("jsonfile");
const fs = require("fs");
const path = require("path");

//扫描文件路径；
const scanPathString = path.join(__dirname, "../../../words-from-the-heart/");
//写入文件路径；
const writePathString = path.join(__dirname, "./data.json");
let findFileType = ".json";

//扫描文件，返回所有的folders和files;
fs.readdir(scanPathString, function(err, files) {
  if (err) {
    console.log("readdir err");
  } else {
    //想要类型的文件
    var jsonFiles = [];

    for (var i = 0; i < files.length; i++) {
      if (files[i].includes(".json")) {
        jsonFiles.push(files[i]);
      }
    }

    //测试文件可读性;
    var jsonFilesContent = [];
    var jsonFilesContentErr = [];
    for (var i = 0; i < jsonFiles.length; i++) {
      try {
        jsonfile.readFileSync(scanPathString + jsonFiles[i]);
        jsonFilesContent.push(jsonFiles[i]);
      } catch (err) {
        jsonFilesContentErr.push(jsonFiles[i]);
      }
    }

    //得到准备写入内容
    var obj = [];
    for (var i = 0; i < jsonFilesContent.length; i++) {
      obj.push(jsonfile.readFileSync(scanPathString + jsonFilesContent[i]));
    }

    //开始写入
    jsonfile.writeFile(writePathString, obj, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("writeFile done");
      }
    });
  }
});
