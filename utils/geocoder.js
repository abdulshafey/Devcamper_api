const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "Vp8GkoR43jq8eW6pyOCPZmmJeC78iGno",
  formatter: null,
};

const geocoder = NodeGeocoder(options);
module.exports = geocoder;
