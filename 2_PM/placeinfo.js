/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require("./google_api");

const lookupPlace = process.argv[2];

if (!lookupPlace) {
  console.log("Usage: node placeinfo.js PLACENAME");
  return -1;
}

googleMapsClient
  .findPlace({
    input: lookupPlace,
    inputtype: "textquery"
  })
  .asPromise()
  .then(res => {
    let candidates = res.json.candidates;
    candidates.forEach(candidate => {
      googleMapsClient
        .place({
          placeid: candidate.place_id
        })
        .asPromise()
        .then(res => {
          let coordinates = res.json.result.geometry.location;
          let address = res.json.result.formatted_address;
          console.log(
            `${lookupPlace} is located at coordinates Latitude: ${
              coordinates.lat
            }, Longitude: ${coordinates.lng}, at the address ${address}`
          );
        })
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
