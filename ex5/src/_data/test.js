const axios = require("axios");
require('dotenv').config();

axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b727690f2cec409cbf590220b63dc2ef")
  .then(function (response) {
    console.log(response.data.articles)
  });
