/*
===> FUNCAO .bind() <===

A função bind() retorna uma função alterando o escopo da função-alvo para
aquele que você passar como argumento. Digamos que eu tenha uma
função assim:

'use strict'
function thisBindExemplo() {
    console.log(this);
}

const obj = {exemple: 'exemple'};

//thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo()

function sith(){console.log(this);}
sith()

=> ATRIBUINDO THIS NA FUNCAO COM NOVOS ESCOPOS <==
 

function sith(){console.log(this);}
sith()

var lordSith  =  sith.bind({ name:  'Darth Bane'});
lordSith()

var  lordSith = sith.bind('Darth Bane'); //string
lordSith()

var lord = sith.bind(19); //number
lord()

**  O this agora foi o objeto que passei como argumento da função .bind().
Poderíamos enviar qualquer coisa como argumento (String, Number,
Object etc.):

** Fica claro que o .bind() retorna uma nova função com um novo escopo

===> FUNCAO .BIND() COM ARROW FUNCTION <===

const jedi = () => { console.log(this) }
jedi()

jedi.bind({ name : 'Obi-wan kenobi'})()

---------------------------------------------------------------------------------------

==> FUNCAO .CALL() <==

*Executa a funcao no momento em que for chamada*
!!! Por isso, conforme o contexto e o momento em que queremos que algo seja
executado, utilizamos o .bind() no lugar do .call() !!!

function sith(){ console.log(this); }
sith.call({name : 'darth vader'});

---------------------------------------------------------------------------------

===> FUNCAO .APPLY() <===

*Tem o mesmo comportamento da funcao .call()*

!!! A verdadeira diferença entre .call() e .apply() está no segundo argumento.
Enquanto a .call() recebe uma lista de argumentos que será repassada como
argumentos da função em que foi chamada: !!!

function sith(arg1, arg2, arg3, arg4){console.log(this); console.log(+ arg1 + arg2 + arg3 + arg4); }


===> .call() ===> sith.call({name : 'scooby'}, 1,2,3,4);

===> .apply() ===> sith.apply({name : 'doo'}, [1,2,3,4]);

===> A FUNCAO APPLY ESTA RECEBENDO UM ARRAY <===
*/
