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
        window.alert('tudo ok')
    } else {
        window.alert('Número inválido ou já digitado')
    }
    

}