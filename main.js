console.log(` <--- Metodo matchAll: Busca todas las coincidencias de una expresión regular en una cadena dada y devuelve un objeto iterable que contiene información sobre cada coincidencia encontrada. --->`);
let cadena = "Daniel Fernández";
let regex = /[aeiou]/g;
let result = cadena.matchAll(regex);


console.log(`Cadena: ${cadena} , Regex : ${regex},
    result = cadena.matchAll(regex), 
    
    el resultado es un objeto iterable que se puede recorrer con un for of

    for (const match of result) {
        console.log(match);        
    }

    Resultado: 
    `);

for (const match of result) {
    console.log(match);
    
}