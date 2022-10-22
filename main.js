const sdk = require('api')('@fsq-docs/v1.0#psm3fl8yqdb71');

sdk.auth('fsq3w2Qi4keLkoD1BrCJepmazrZksXsfNvRrDc0QBgCejJM=');
sdk.placeSearch()
  .then(data => console.log(data))
  .catch(err => console.error(err));
