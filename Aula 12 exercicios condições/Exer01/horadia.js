function carregar(){
    var msg = document.querySelector('div#msg')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if(hora < 12 && hora >=4){
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora>=12 && hora <= 18){
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else if(hora >18 && hora <=23 || hora<4 ){
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}