function calcular(){
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('seltab')
    if(num.value.length==0){
        window.alert('Insira dados válidos, por favor')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
    /*var num = window.document.getElementById('num')
    var res = window.document.getElementById('res')
    num2 = Number(num.value)
    var i = 0
    if(num.value.length==0){
        window.alert('Insira dados válidos, por favor')
    } else{
        for (i = 1; i<= 10; i++){
            var  resultado = num2*i
            res.innerHTML += (`${num2} x ${i} = ${resultado} <br>`)
        }
    

    }*/
}