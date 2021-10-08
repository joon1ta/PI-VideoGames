//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');


require('dotenv').config();

// Syncing all the models at once.
conn.sync({ force: false }).then( async () => {
 
//   let categories = lista.data.results.map( (cat) => {                 //mapeo para solo guardar los nombres y el id correspondiente a cada genero
//    return { name: cat.slug,
//             id: cat.id }
// })
// console.log(categories)
// await categories.forEach(el => {
//     Genre.findOrCreate({
//       where: {name: el.name}
//     })
//   })
   // creamos todos los generos en la base de datos
  server.listen(3002, () => {
    console.log('%s listening at 3002'); // eslint-disable-line no-console
  });
});
