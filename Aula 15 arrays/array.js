// para adcionar variáveis compostas é só declarar assim: let num = [1, 2, 3] aqui ela recebeu 3 valores na posição 0, 1 e 2.
//para adcionar outro elemento faz assim: num[3] = 4, oum num.push(4) que ele vai criar outra vaga pro elemento sem precisar de eu colocar a posição
//num.length para saber quantos elementos tem
//num.sort para organizar em ordem crescente
let num = [5,8,3,29,43,14,12,0,1]
num.push(4)
console.log(num)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} elementos`)
console.log(`o primeiro elemento é ${num[0]}`)
for(let pos=0;pos<num.length; pos++){
    console.log(`${num[pos]}`)
}
//tem uma forma mais fácil do for especifico para arrays e objetos
for(let i in num){
    console.log(num[i])
}
//lê se para cada posição em num/ para cada posição na variável composta faça
//num.imdexOf procua a posição que tá o vetor x e se não tiver ele retorna -1 o que significa que não tem aí coloca um if (n==-1) e coloca que não existe
var n = num.indexOf(8)
console.log(`O valor 8 está na posição ${n}`)