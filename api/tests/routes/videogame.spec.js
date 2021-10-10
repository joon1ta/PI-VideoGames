/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const {conn } = require('../../src/db.js');

const agent = session(app);


describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
});

describe('GET /genres',  () => {
  it('should return all genres', () =>{
    return agent
   .get('/genres')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((res) => {
       expect(res.body).to.have.length(19)
      
    })
  })
})

describe('GET /videogames/:id', () => {
  it('should return game detail', () => {
    return agent.get('/videogames/3498')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((res) => {
      expect(res.body).to.have.ownProperty("slug")
      expect(res.body).to.include({id: 3498})
    })
  })
})