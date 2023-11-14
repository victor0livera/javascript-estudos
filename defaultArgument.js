/*
Argumentos padrões possibilitam que uma função seja invocada sem
valores:

function defaultArg(answer = 42) { return answer }
console.log(defaultArg(10))

isso explicita a diferença entre undefined e null:
console.log(defaultArg(undefined))
console.log(defaultArg(null))

null é um valor, enquanto undefined não é, podendo ser pensado como a
falta de valor.
*/