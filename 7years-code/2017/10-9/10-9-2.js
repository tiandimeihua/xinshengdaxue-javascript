var axios = require("axios");

axios
  .get("https://js.xinshengdaxue.com/api/v1/learnJS/course/1/words")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
