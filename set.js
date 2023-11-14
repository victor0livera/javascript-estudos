/*

Set são coleções que permitem armazenar valores únicos de qualquer tipo.
Por conta dessa característica, é uma forma muito prática de remover
duplicidade de um array.

const arr = [1,2,2,2,3,3,4,4,4,4]
console.log(arr)
console.log(new Set(arr))


Vale lembrar que, ao comparar dois objetos com ===, eles somente serão
iguais se representarem o mesmo objeto, no mesmo endereço de memória;
caso contrário, o resultado será sempre falso.

console.log({ a: 1 } === { a: 1 })

A forma correta de comparar objetos em JavaScript é comparar atributo a
atributo, e o NodeJS possui um método utilitário para tal.

const util = require('util')
console.log(util.isDeepStrictEqual({a:1}, {a:1}))

*/

