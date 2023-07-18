function contagem(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.getElementById('res')
    if(Number(passo.value) == 0|| Number(inicio.value) > Number(fim.value)){
        window.alert('Por favor, digite números corretos')
    }
}