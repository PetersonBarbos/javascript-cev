// Funções são ações executadas assim que são chamadas ou em decorrência de um evento
// uma função pode receber parâmetros e retornar um resultado

function parimpar(n){
    if(n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(5))

function soma(n1=0, n2=0){
    //caso não tenha número definido para n1 e/ou n2 eles vão receber 0
    return n1+n2
}
console.log(soma(4,8))

//posso també definir uma variável como uma função
let v = function(x){
    return x*2
}
console.log(v(5))

//fatorial
function fatorial(n){
    let fat=1
    for (let c=n;c>1;c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))