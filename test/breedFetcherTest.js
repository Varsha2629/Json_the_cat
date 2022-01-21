const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  xit('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (desc, err) => {
      // we expect no error for this scenario
      assert.isNull(err);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

 it('return the error where an invalid/non-existent breed is passed', (done) => {
    fetchBreedDescription('Varsha', (desc, err) => {
      // we expect no error for this scenario
      assert.isNotNull(err);

      const expectedDesc = "Breed not found!";

      // compare returned description      
      assert.equal(expectedDesc, err);
     
      done();
    });
  });
});