/*
O operador (?) permite a leitura do valor de propriedades de objetos, sem
causar erro, se a referência for null ou undefined, enquanto usando o
operador . (ponto) causaria. É a forma de evitar verificação de nulo
provendo navegação segura.

const televisionSerie = {
    title: 'The Mandalorian',
    createdBy: {
    name: 'Jon Favreau',
    birth: '1966-10-19',
    country: 'U.S'
    },
    starring: [
    { name: 'Pedro Pascal', birth: '1975-04-02', country: 'Chile' }
    ]
}

podemos navegar entre as propriedades.
console.log(televisionSerie.createdBy.name)

Porém, ao tentar acessar o valor de uma propriedade que não existe:
console.log(televisionSerie.composer.name)

estoura um TypeError, pois não existe a propriedade composer; portanto,
não há como acessar o valor de .name.

Então, para lidar com essa situação em que precisamos ler uma
propriedade, mas não temos garantia se a navegação entre propriedades é
segura, empregávamos técnicas como:
console.log(televisionSerie.composer && televisionSerie.composer.name)
console.log((televisionSerie.composer ||{}).name)

que, ao longo do tempo, iam deixando o código verboso e feio. Felizmente
agora, com ES6, podemos usar ?. (interrogação ponto):
console.log(televisionSerie.composer?.name)

*/
