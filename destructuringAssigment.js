/*

    Atribuição via desestruturação é uma nova sintaxe para extrair dados de
arrays ou objetos em novas variáveis, podendo até colocar valores padrão, caso

undefined

const [a, b] = [1, 2];
console.log(a);
console.log(b);

const {name} = {name:'fin'};
console.log(name)

Podemos usar destructuring em argumentos de funções e para extrair em
variáveis apenas uma parte específica do objeto informado:

function onlyNameAge({name, age}) {
    console.log(name, age);
}

onlyNameAge({ name: 'joao victor', age: 19, country: 'Brasil'})

Note que a chave country foi completamente ignorada.

*/