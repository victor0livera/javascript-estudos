/*
const places = {
    'Coruscant' : 'Capital da republica galatica',
    'Estrela da morte' : 'estacao espacial com laser capaz de explodir outros planetas',
    'Dagobah' : 'Lar do mester yoda',
    'Hoth' : 'Congelado e remoto',
    'Endor' : 'Florestas de ewoks',
    'Naboo' : 'Cultura exótica',
    'Tatooine' : 'Dois sóis'
}

// acessando as propriedades
console.log(Object.keys(places).length)
console.log(!!places['Naboo'])


Hoje em dia, podemos usar o operador new Map(), em que o primeiro
argumento do método set é a chave, e o segundo é o valor

const places = new Map()

places.set('Coruscant', 'capital da republica galatica')
places.set('Estrela da morte', 'estacao espacial com capacidade de destruir outros planetas')
places.set('Dagobah', 'lar do mestre yoda')

console.log(places.size)
console.log(places.has('Dagobah'))


podemos alterar um valor de uma chave:

places.set('Coruscant', 'capital da republica galatica');
places.set('Estrela da morte', 'estacao espacial com capacidade de destruir outros planetas');
places.set('Dagobah', 'lar do mestre yoda');

console.log(places.get('Coruscant'));
console.log(places.set('Coruscant', 'terra de joao victor'));
console.log(places.get('Coruscant'));

ou remover:
console.log(places.delete('Coruscant'));
console.log(places.get('Coruscant'));


 */

const places = new Map();


