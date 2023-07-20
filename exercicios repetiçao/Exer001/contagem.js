function contagem(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.getElementById('res')
    var iniciof = Number(inicio.value)
    var fimf = Number(fim.value)
    var passof = Number(passo.value)
    //para adcionar emoji é \u{1f449} e só sunciona entre crase
    if(inicio.value.length == 0 || fim.value.length==0|| passo.value.length==0){
        window.alert('insira os dados')}
     else{
        if(Number(passo.value) == 0){
            window.alert('passo inválido, vou considerar passo 1')
            passo = 1
        }
        if(fimf > iniciof){
            for(iniciof;iniciof<=fimf;iniciof+=passof){
                res.innerHTML += (` ${iniciof} \u{1f449}`)//ele tá sempre substituindo o res anterior pelo atual, pq eu coloquei = ao invés de +=
            } 
           
        }else {
                for(iniciof;iniciof>=fimf;iniciof-=passof){
                res.innerHTML += (` ${iniciof} \u{1f449}`)
                }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}