function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anonasctxt = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(anonasctxt.value.length == 0 || Number(anonasctxt.value) > anoatual){
        window.alert('Escreva dados válidos')

    } else {
        var sex = document.getElementsByName('radsex')
        var idade = anoatual - Number(anonasctxt.value)
        var genero = ''
        var img = document.createElement('img') //cria imagem
        img.setAttribute('id','foto') // adciona id foto a imagem
        if(sex[0].checked){
            genero = 'homem'
            if(idade < 12){
                img.setAttribute('src','imagens/homemcrianca.jpg')
            } else if(idade < 20){
                img.setAttribute('src','imagens/homemadolescente.jpg')
            } else if(idade < 50){
                img.setAttribute('src','imagens/homemadulto.jpg')
            } else{
                img.setAttribute('src','imagens/homemidoso.jpg')
            }
        } else {
            genero = 'mulher'
            if(idade < 12){
                img.setAttribute('src','imagens/mulhercrianca.jpg')
            } else if(idade < 20){
                img.setAttribute('src','imagens/mulheradolescente.jpg')
            } else if(idade < 50){
                img.setAttribute('src','imagens/mulheradulta.jpg')
            } else{
                img.setAttribute('src','imagens/mulheridosa.jpg')

            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectei ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}