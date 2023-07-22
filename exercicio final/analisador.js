function adcionar(){
    let num = Number(window.document.getElementById('num'))
    let vet = []  
    let res = window.document.getElementById('res')
    
        if(num == vet[i] || num.length == 0){
            window.alert('Escreva um número não escrito antes')
       } else {
        vet.push(num)
        res.innerHTML += vet[i]
       }
    

}