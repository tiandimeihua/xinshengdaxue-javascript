var axios = require("axios");
axios
  .post("https://js.xinshengdaxue.com/api/v1/learnJS/sayToMe", {
    name: "你的大名",
    account: "419428615@qq.com",
    content: "对老师说的话"
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
