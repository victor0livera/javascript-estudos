/*
Existem diversas opções – for, for in, for of, while, do while – e os métodos de
coleções forEach, map, filter etc. Apesar de ser praticamente possível escrever
qualquer tipo de loop com for ou while, com experiência você achará qual
das opções é a mais adequada a cada situação.


===>  LOOP FOR <===

const arr = [1,2,3,4,5,6,7,11];

for(let i = 0, max = arr.length; i < max; i++){
    console.log(arr[i]);
}
---------------------------------------------------------

===> LOOP WHILE <===

const arr = [1,2,3,5,7,11];
var i = 0;
const max = arr.length;
while(i < max) {
    console.log(arr[i]);
    i++
}
---------------------------------------------------------

===>  MAP <===

const  arr = [1,2,3,5,7,11];
arr.map(x => console.log(x));

---------------------------------------------------------

===> forEach <===

const arr = [1,2,3,4,7,11];
arr.forEach(x => console.log(x))

---------------------------------------------------------

===> FOR IN  <===
 
const arr = [1,2,5,6,11];
for (x in arr){
    console.log(x);
}
*/
