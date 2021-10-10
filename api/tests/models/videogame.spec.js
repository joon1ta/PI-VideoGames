const { Genre, Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
 

  // describe('Find genres in database', () => {
  //   it('should have 19 items, this has been pre-charged', () => {
  //     return Genre.findAll()
  //     .then(function (res){
  //       expect(res.body).to.have.length(19)
  //     })
  //   })
  // })
});
