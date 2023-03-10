console.log(` <--- Metodo match: Busca una cadena para una expresión regular y devuelve las coincidencias como un array. --->`);
let cadena = "Daniel Fernández";
let regex = /[aeiou]/g;
console.log(`Cadena: ${cadena} , Regex : ${regex} , donde g complementa el metodo match para que todos los resultados que coincidan con la expresión regular completa
    cadena.match(regex): ${cadena.match(regex)}
    `);