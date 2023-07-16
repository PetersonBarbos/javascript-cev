/*switch case - não testa intervalos, apenas situações pontuais
    switch(expressão){
        case valor 1:
            ...
        break // ele vai testar a condição e encerrar, caso não tenha break ele vai continuar testando, mesmo com a condição já satisfeita
        case valor 2:
            ...
        break
        case valor 3:
            ...
        break
        defalt: //defalt e o equivalente ao else
            ...
        break
    }

*/
var agora = new Date()
var diasem = agora.getDay()
switch (diasem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
}