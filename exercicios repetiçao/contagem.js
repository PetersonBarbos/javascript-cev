function contagem(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.getElementById('res')
    var iniciof = Number(inicio.value)
    var fimf = Number(fim.value)
    var passof = Number(passo.value)
    if(Number(passo.value) == 0){
        window.alert('passo inválido, vou considerar passo 1')
        passo = 1
    }
    for(iniciof;iniciof<=fimf;iniciof+=passof){
        res.innerHTML = (`${iniciof} <br>`)//ele tá sempre substituindo o res anterior pelo atual
    }
}