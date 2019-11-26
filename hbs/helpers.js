const hbs = require('hbs');

// Helpers --> Los helpers son funciones que se disparan cuando un rende lo necesita

hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();

});

hbs.registerHelper('capitalizar', ( texto ) => {

    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {

         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');

});


// Nota: no hace falta crear una constante al importar este archivo ya que se esta registrando en hbs directamente
// pero si hay que importarlo con require.