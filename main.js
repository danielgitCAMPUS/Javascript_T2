console.log(`En JavaScript, los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano true o false. Los operadores de comparación disponibles en JavaScript son los siguientes:

==: igualdad (compara si dos valores son iguales)
!=: desigualdad (compara si dos valores son diferentes)
===: igualdad estricta (compara si dos valores son iguales y tienen el mismo tipo de dato)
!==: desigualdad estricta (compara si dos valores son diferentes o tienen tipos de datos diferentes)
>: mayor que (compara si un valor es mayor que otro)
<: menor que (compara si un valor es menor que otro)
>=: mayor o igual que (compara si un valor es mayor o igual que otro)
<=: menor o igual que (compara si un valor es menor o igual que otro)`);

let x = 27;
let y = 10;

console.log(`x: ${x} , y: ${y}`)

console.log("igualdad", x == y); // false
console.log("desigualdad",x != y); // true
console.log("igualdad estricta",x === '10'); // false
console.log("desigualdad estricta",x !== '10'); // true
console.log("mayor que ",x > y); // true
console.log("menor que",x < y); // false
console.log("mayor o igual que",x >= y); // true
console.log("menor o igual que",x <= y); // false
