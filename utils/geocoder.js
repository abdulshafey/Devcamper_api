const nodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "Vp8GkoR43jq8eW6pyOCPZmmJeC78iGno",
  formatter: null,
};

const geocoder = nodeGeocoder(options);
module.exports = geocoder;
