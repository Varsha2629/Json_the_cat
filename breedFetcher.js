const request = require("request");

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/\breeds/search?q=${breed}`,(error, response, body) => {
  
  if(error){

    return console.log('URL not Found');
    
  }
//  console.log(response && response.statusCode);
const data = JSON.parse(body);
 
  if(!data[0] ){
    console.log('Breed not found!')
  } else { 
      console.log(data[0].description);
  }


});

