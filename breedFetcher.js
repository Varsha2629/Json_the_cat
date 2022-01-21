const request = require("request");


const fetchBreedDescription = (breedName, callback) => {
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
console.log(url)
  request(url, (error, response, body) => { 
    if (error) {
      callback(error, null)
      return;
    }
    //  console.log(response && response.statusCode);
    const data = JSON.parse(body);
    const breed = data[0]
    if (!breed) {
      callback("Breed not found!", null)
      return;
    }

     console.log(breed.description); 
    callback(null, breed.description);

  });
}
module.exports = { fetchBreedDescription };

