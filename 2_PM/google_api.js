// TODO - create client object for Google API connection which can be exported

const config = require("./config");
const googleMapsClient = require("@google/maps").createClient({
  key: config.API_KEY,
  Promise: Promise
});

module.exports = googleMapsClient;
