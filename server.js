const express = require('express');
const app = express(); // Declarar variable como producto de la función express para usarlo.
 
// Esto es un middleware, una instrucción (callback) siempre no importa que url se solicite
app.use( express.static( __dirname + '/public' ) ); // Cualquier persona puede ver aquí

// Configurando la solicitud get cuando se accede a '/'
// app.get('/', (req, res) => {
  
//     //res.send('Hola Mundo');

//     let salida = {

//         nombre: 'Momfus',
//         edad: 28,
//         url: req.url

//     };


//     res.send( salida ); // Internamente sabe que es un objeto y lo serializa en formato de Json

// });

//#region Si quiero uno para que trabaje en /data
/*
app.get('/data', (req, res) => {
  
    res.send('Hola Data');

});
*/
//#endregion

// app.listen(3000); // Puerto escuchando

// Para indicar no solo el puerto sino que puedo indicar una función al momento de empezar a escuchar el mismo
app.listen(3000, () => {

    console.log('Escuchando peticiones en el puerto 3000');

});