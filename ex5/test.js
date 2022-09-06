// https://newsapi.org/v2/top-headlines?country=${us}&apiKey=${process.env.NEWS_API_KEY}&pageSize=2
// https://newsapi.org/v2/top-headlines?country=us&apiKey=b727690f2cec409cbf590220b63dc2ef&pageSize=2
const axios = require("axios");

axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b727690f2cec409cbf590220b63dc2ef&pageSize=2')
  .then(function (response) {
    console.log(response.data.articles);
  });