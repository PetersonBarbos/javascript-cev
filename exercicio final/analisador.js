let num = window.document.getElementById('num')
let vet = []  
let res = window.document.getElementById('res')

function enumr(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}
function ntalist(n,l){
    if(l.indexOf(Number(n)) == -1){
        return true
    } else{
        return false
    }
}


function adicionar(){
    if(enumr(num.value) && ntalist(num.value,vet)){
        vet.push(Number(num.value))
        res.innerHTML+=`valor ${Number(num.value)} adicionado <br>`
    } else {
        window.alert('Número inválido ou já digitado')
    }
    
}


function analisar(){
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0
    let media = 0
    for (let i in vet){
        if (vet[i]>maior){
            maior=vet[i]
        }
        if(vet[i]< menor){
            menor = vet[i]
        }
        soma += vet[i]
        media = soma/vet.length
    }
    res.innerHTML += `<br> <br>maior = ${maior}, menor = ${menor}, soma = ${soma} e média = ${media}`

}
