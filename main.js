let cadena = "😀👍🏽";
console.log(` <--- Metodo codePointAt: Devuelve el valor Unicode del carácter en el índice especificado, a diferencia del charCodeAt es que este es útil para trabajar con caracteres Unicode que no se pueden representar con un solo valor de 16 bits .  --->`);
console.log(`Cadena : "${cadena}" 
    Valor unicode en el indice 0 es: ${cadena.codePointAt(0)}`);