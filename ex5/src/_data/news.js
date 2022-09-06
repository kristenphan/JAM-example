const axios = require("axios");
const countries = require("./countries.json")
require('dotenv').config();

// Axios returns a Promise in json structure
// pageSize = no of articles per country
async function getNews(country) {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=2`);
    return {
        "country": country,
        "articles": response.data.articles // [{source:s1, author: 1,...}, {source:s2, author:a2}, ...]
    }
  } catch (error) {
    console.error(error);
  }
};

// Loop through countries.json and make an api call for each country using map()
module.exports = async function() {
    // Return an array of Promises for all countries in countries.json
    var newsPromises = countries.map(getNews);

    // Once all Promises have been returned, concatenate the results and return
    return Promise.all(newsPromises).then( newsObjects => {
                // [{country: c1, articles: [{s:s1, a: a1}, {}]}, {country:c2, articles:[]}]
                return [].concat.apply([], newsObjects); 
                });
};
