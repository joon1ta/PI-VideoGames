const { Router } = require("express");
const URL = "https://api.rawg.io/api/";
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
require("dotenv").config();
const { YOUR_API_KEY } = process.env;

const router = Router();

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
     res.json(games)
}
 


  if(name) {
      try {
          
      } catch (error) {
        console.log(error);
      }
  }
});

module.exports = router;
