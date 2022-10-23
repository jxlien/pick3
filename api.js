const axios = require("axios");
const { config } = require('dotenv')

// Initialize environment variables
config();

const requestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY
  }
};

async function search(query) {
  const {near = 'Chattanooga, TN'} = query
  const searchParams = new URLSearchParams({
    near,
    open_now: 'true',
    sort: 'DISTANCE'
  });

  const data = await axios.get(`https://api.foursquare.com/v3/places/search?${searchParams}`, requestOptions)
    .then(res => res.data)
    .catch(err => console.error(err));

  return data.results;
}

async function searchNames(query) {
  return (await search(query)).map(place => place.name);
}

module.exports = {
  search, searchNames
}

