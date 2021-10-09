const { Router } = require("express");
const URL = "https://api.rawg.io/api/";
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const {Videogame, Genre} = require('../db')
const router = Router();
const { Op} = require ('sequelize');
const { v4: uuidv4 } = require('uuid');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", async (req, res) => {
  
  let { name } = req.query
  if(!name) {
    
    const games1 = await axios.get(`${URL}games?key=${YOUR_API_KEY}`); // Consulta a la api para listar juegos por defualt nos trae 20
    games_page2 = games1.data.next; // desde axios siempre accedemos a su respuesta con .data y el .result son los datos que queremos de la api
    const games2 = await axios.get(games_page2)
    games_page3 = games2.data.next
    const games3 = await axios.get(games_page3)
    games_page4 = games3.data.next
    const games4 = await axios.get(games_page4)
    games_page5 = games4.data.next
    const games5 = await axios.get(games_page5)
    let games = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results, games5.data.results);
     games = games.map((game) => { // mapeamos los datos insertados en games_arr para tener un objeto con los datos especificos
      return {
        id: game.id,
         name: game.name,
         image: game.background_image,
         description: game.description,
         released: game.released,
         rating: game.rating,
         platforms: game.platforms,
       genres: game.genres,
         
       };
     });
     // Traemos desde nuestra db los juegos que creo el usuario
     const dbGames = await Videogame.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: {
          model: Genre,
          attributes: ['name'],
          through: {attributes: []}
        }
     });
     console.log(dbGames)
     let dbApiGames = games.concat(dbGames)
     console.log(dbApiGames.length)

     res.send(dbApiGames)
}
 


  if(name) {
      try {
          let gameSearch = await axios.get(`${URL}games?search=${name}&key=${YOUR_API_KEY}`)

          if(gameSearch.data.results.length !== 0) {
            let gameSearched = gameSearch.data.results.map( search => {
              return  {
                id: search.id,
                name: search.name,
                image: search.background_image,
                description: search.description,
                released: search.released,
                rating: search.rating,
                platforms: search.platforms,
                genres: search.genres,
              }
            })
            gameSearched = gameSearched.slice(0, 15)
            const dbGame = await Videogame.findAll({ // volvemos a traer los juegos creados de la db
              where: {name: { [Op.iLike]: name}},
              attributes: { exclude: ['createdAt' , 'updatedAt']},
              include: {
                  model: Genre,
                  attributes: ['name'],
                  through: {attributes: []}
              }
          });
            const allGames = dbGame.concat(gameSearched)
            res.send(allGames)
          } else {
            res.send(dbGame)
          }
      } catch (error) {
          res.sendStatus(404).send('There is no game with that name')
      }
  }
});


router.get('/videogames/:id', async (req, res) => {
  const {id} = req.params;
  console.log(id.length)
  try {
    if(id.length < 10) { // buscamos si el id es menor a 10 numeros mostramos de la api
      const gameById = await axios.get(`${URL}games/${id}?key=${YOUR_API_KEY}`)

      res.send(gameById.data)
    }
    if(id.length > 10) { // si el id buscado es mayor buscamos de la db
      const dbGame = await await Videogame.findOne({
        where: {
            id: id
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {attributes: []}
        }
    })
    res.send(dbGame) 
    }
  } catch (error) {
    console.log(error)
    res.status(404)

  }
})

router.get('/genres', async (req, res) => {
  try {
    const genres = await axios.get(`${URL}genres?key=${YOUR_API_KEY}`) // traemos los generos de la api
    
    let category = genres.data.results.map(categories => {
      return {name: categories.slug,
              id: categories.id}
    })

    await category.forEach(el => {
      Genre.findOrCreate({
        where: {name: el.name,
                id: el.id }
      })
    })
    console.log(category)
    res.send(category)
  } catch(error) {
    console.log(error)
  }
})
router.post('/videogame', async (req, res) => {
  const {name, description, release_date, platform, rating, genreOne, genreTwo } = req.body    //aca van los datos que llegan desde el form
    
    try{
      
        
        console.log(genreOne)
        console.log(genreTwo)
        if(name && description && platform){
            const newGame = await Videogame.create({   
                     
                       name,
                       description,
                       release_date,            
                       rating,
                       platform                                          
            })
            console.log("este es el juego creadooooooo",newGame)
            const dbGenre2 = await Genre.findByPk(genreTwo)
            const dbGenre1 = await Genre.findByPk(genreOne)      
            
            console.log('holaaaaaaaa',dbGenre1)
            console.log('holaaaaaaa',dbGenre2)
            let dbGenres = [] 
            dbGenres.push(dbGenre1)
            dbGenres.push(dbGenre2)
            console.log(dbGenres)
                        
             await newGame.addGenres(dbGenres)    
              
            
         
            res.send(newGame);

        }
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
