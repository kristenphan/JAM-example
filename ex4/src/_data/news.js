// const API-KEY = "b727690f2cec409cbf590220b63dc2ef";
// `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API-KEY}&pageSize=5`

const axios = require("axios");

module.exports = async function() {
  try {
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b727690f2cec409cbf590220b63dc2ef");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
