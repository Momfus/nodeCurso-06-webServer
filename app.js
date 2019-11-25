const http = require('http'); // Ya esta incluido en node

// para escuchar peticiones http, debemos crear el servidor


http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    // res.write('Hola Mundo');

    let salida = {

        nombre: 'Momfus',
        edad: 28,
        url: req.url

    };

    res.write( JSON.stringify(salida)  );

    res.end(); // Indica que ya termino la respuesta


})
.listen(8080); // puerto que se está escuchando


console.log('Escuchando el puerto 8080');
