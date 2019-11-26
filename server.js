const express = require('express');
const app = express(); // Declarar variable como producto de la función express para usarlo.
const hbs = require('hbs');
require('./hbs/helpers'); // --> traer los helpers

// Esto es un middleware, una instrucción (callback) siempre no importa que url se solicite
app.use( express.static( __dirname + '/public' ) ); // Cualquier persona puede ver aquí

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' ); // un directorio que tendrá todos los partcials
app.set('view engine', 'hbs'); // par señalizar que use hbs por defecto para renderizar la pagina



// Configurando la solicitud get cuando se accede a '/'
app.get('/', (req, res) => {
  
    res.render( 'home', { // de esa mandera renderiza el home.hbs

        nombre: 'momFus arboLeo',

    } ); 

});

// Configurando la solicitud cuando se accede a '/about'
app.get('/about', (req, res) => {
  
    res.render( 'about' );  // de esa mandera renderiza el about.hbs

});

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