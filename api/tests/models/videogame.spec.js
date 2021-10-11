const { Genre, Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
 

   describe('Find genres in database', async () => {
     it('should have 19 items, this has been pre-charged',  async () => {
       const genres = await Genre.findOne({where: {id: 83}})
       expect(genres.dataValues).to.have.own.property('id');
       expect(genres.dataValues).to.have.own.property('name');
    })
    it('attribute name must be a string', async () => {
      const genre = await Genre.findOne({where: {id: 83}})
      expect(genre.dataValues.name).to.be.a('string')
    })
    it('attribute id must be a number', async () => {
      const genre = await Genre.findOne({where: {id: 83}})
      expect(genre.dataValues.id).to.be.a('number')
    })
   })
});
