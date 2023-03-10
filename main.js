console.log(`En JavaScript, los operadores lógicos se utilizan para combinar o negar valores booleanos. Los operadores lógicos disponibles en JavaScript son los siguientes:

&&: operador AND (retorna true si ambos operandos son verdaderos, de lo contrario retorna false)
||: operador OR (retorna true si alguno de los operandos es verdadero, de lo contrario retorna false)
!: operador NOT (retorna el valor opuesto del operando)`);

let x = 27;
let y = 10;

console.log(`x: ${x} , y: ${y}`)

console.log("AND", x > 5 && y < 10); 
console.log("OR",x > 5 || y > 10); 
console.log("NOT", !(x > y)); 
