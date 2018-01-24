var axios = require("axios");

async function getXinLiHua(params) {
  try {
    let response = axios.get("https://js.xinshengdaxue.com" + params);
    let name = response.words;
    console.log(response);
  } catch (error) {
    console.log(err);
  }
}

getXinLiHua("/api/v1/learnJS/course/1/words");
