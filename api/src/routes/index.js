const { Router } = require('express');
const URL = 'https://api.rawg.io/api/';
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { YOUR_API_KEY } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', async (req, res) => {
    try {
        const games = await axios.get(`${URL}games?key=b43478ca85ed4cf7997dfde5f55531e1`);  
        res.json(games.data.results)  
    } catch(error) {
        console.log(error)
    }
   


})

module.exports = router;
