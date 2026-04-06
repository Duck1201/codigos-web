let contar = document.getElementById('contar')
contar.addEventListener('click', () => {
    let inputs = document.getElementsByClassName('inputs')
    let contagem = document.getElementById('contagem')
    // let arr = [] 
    
    if(inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0){
        contagem.innerHTML = 'Impossivel contar.'
    }else{
        contagem.innerHTML = 'Contagem: '
        let inicio = Number(inputs[0].value)
        let fim = Number(inputs[1].value)
        let i = Number(inputs[2].value)
        
        if(i <= 0){
            alert('O incremento não pode ser 0. Será considerado 1')
            i = 1
        }
        if(inicio < fim){
            for(i; inicio <= fim; inicio = i + inicio){
                contagem.innerHTML += ` ${inicio} \u{1F449}`
                // arr.push(inicio)
            }
        }else{
            for(i; inicio >= fim; inicio = inicio - i){
                contagem.innerHTML += ` ${inicio} \u{1F449}`
            }
        }
            contagem.innerHTML += ` \u{1F44A}`
        //contagem.innerHTML = (`${arr.join(' => ')}!`)
    }
})
