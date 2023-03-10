console.log(` <--- Metodo search: Busca una cadena para una expresión regular y devuelve el índice del primer carácter de la primera coincidencia. --->`);
let cadena = "Daniel Fernández";
let regex  = /nán/;
console.log(`Cadena: ${cadena} , Regex: ${regex}
    cadena.search(regex): ${cadena.search(regex)}
    Retorna el indice de la primera n en cadena, basada en la busqueda de regex`);