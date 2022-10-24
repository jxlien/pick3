
const { config } = require('dotenv')

const sdk = require('api')('@fsq-docs/v1.0#psm3fl8yqdb71');


// Initialize environment variables
config();
sdk.auth(process.env.API_KEY);

async function search(zip) {
  return (await sdk.placeSearch({categories: '13000', near: zip, limit: '50'})
  .catch(err => console.error(err))).results;
}

async function searchPhotos(id) {
  return await sdk.placePhotos({fsq_id: id})
  .catch(err => console.error(err));
}

function rndEl(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// *** MAIN *** //


async function main() {

  console.log("started");
  const zip = 37922;

  const data = await search(zip);
  const pick3 = [];
  
  
  //populate array with three choices

  while (pick3.length != 3) {
    const randomElement = rndEl(data);
    if (pick3.indexOf(randomElement) === -1) pick3.push(randomElement);
    if (pick3.length === 3) break; 
  }
  
  //get image urls for each choice by creating new key in object
  for (let i = 0; i < 3; i++) {
    let image = await searchPhotos(pick3[i].fsq_id);
    const imageURL = image[0].prefix + 'original' + image[0].suffix;
    pick3[i].image = imageURL;

    //put each image url together in loop so they're in order


  }
  console.log(pick3);

  


  // console.log(imageURL);
  return pick3;
  
}
main()

module.exports = {main};
