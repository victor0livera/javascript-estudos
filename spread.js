/*

O operador spread permite expandir arrays ou objetos, fazendo cópias
destes para outros destinos.

Antes fazíamos uma cópia de um objeto para outro utilizando Object.assign:

const televisionSerie = {
    title: 'the mandalorian',
    createdBy: {
        name:'Jon Favreau',
        birth:'1966-10-19',
        country: 'U.S'
    },
    starring: [
        {name: 'Pedro Pascal', birth:'1975-04-02', country:'chile'}
    ]
}
console.log(televisionSerie);

const target = {}
Object.assign(target, televisionSerie);

console.log(target);

Mas, usando spread, o código fica mais declarativo:

const televisionSerie = {
    title: 'the mandalorian',
    createdBy: {
        name:'Jon Favreau',
        birth:'1966-10-19',
        country: 'U.S'
    },
    starring: [
        {name: 'Pedro Pascal', birth:'1975-04-02', country:'chile'}
    ]
}
console.log(televisionSerie);

const copy = {televisionSerie}
console.log(copy)

Para fazer merge de objetos, os valores da direita têm preferência:

const televisionSerie = {
    title: 'the mandalorian',
    createdBy: {
        name:'Jon Favreau',
        birth:'1966-10-19',
        country: 'U.S'
    },
    starring: [
        {name: 'Pedro Pascal', birth:'1975-04-02', country:'chile'}
    ]
}
console.log(televisionSerie);

const jonFavreau = { name: 'jonathan Kolia Favreau' }
console.log(televisionSerie.createdBy, jonFavreau)

// com arrays

const season1 = [
    'Dave filoni',
    'Rick Famuyiwa',
    'Deborah Chow'
]

const season2 = [
    'Jon Favreau',
    'Peeyton Reed'
]

const directories = [
    season1,
    season2
]

console.log(directories)

*/
