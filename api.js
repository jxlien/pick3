
const { config } = require('dotenv')

const sdk = require('api')('@fsq-docs/v1.0#psm3fl8yqdb71');


config();
sdk.auth(process.env.API_KEY);

// searching for places from the API

async function search(zip) {
  return (await sdk.placeSearch({categories: '13000', near: zip, limit: '50'})
  .catch(err => console.error(err))).results;
}

// uses fsq_id to find photos of a place

async function searchPhotos(id) {
  return await sdk.placePhotos({fsq_id: id})
  .catch(err => console.error(err));
}

// get random element from array

function rndEl(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function main(urlparams = {}) {
  
  const zip = urlparams.near ? urlparams.near: 'Chicago, IL';

  const data = await search(zip);
  const pick3 = [];
  
  
  // populate array with three choices

  while (pick3.length != 3 && data.length > 2) {
    const randomElement = rndEl(data);
    if (pick3.indexOf(randomElement) === -1) pick3.push(randomElement);
    if (pick3.length === 3) break; 
  }
  
  // get image urls for each choice by creating new key in object

  for (let i = 0; i < pick3.length; i++) {
    const images = await searchPhotos(pick3[i].fsq_id);
    if (images && images.length === 0) {
      pick3[i].image = '';
      continue
    }
    const imageURL = images[0].prefix + 'original' + images[0].suffix;
    pick3[i].image = imageURL;
  }

  return pick3;
  
}
module.exports = {main};
