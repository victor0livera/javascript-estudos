/*

A sintaxe rest parameters permite abandonar o uso da palavra reservada
arguments, com a vantagem de um rest parameter ser um array e ter todos
os métodos disponíveis para uso: .map, .forEach etc. A forma correta de uso é
somente como último argumento.

function sumNumbers(normalParam, ...restParam) {
    return normalParam + restParam.join('')
}

console.log( sumNumbers('impares: ', 1, 3, 5) )
console.log( sumNumbers('par: ', 2, 4, 6) )

*/