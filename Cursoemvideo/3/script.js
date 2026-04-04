let contar = document.getElementById('contar')
contar.addEventListener('click', () => {
    let inputs = document.getElementsByClassName('inputs')

    let inicio = Number(inputs[0].value)
    let fim = Number(inputs[1].value)
    let i = Number(inputs[2].value)
    
    let arr = []

        let contagem = document.getElementById('contagem')
    contagem.innerHTML = 'Contagem: '
    for(i; inicio <= fim; inicio = i + inicio){
        contagem.innerHTML += `${inicio}`
        // arr.push(inicio)
    }
    // contagem.innerHTML = (`${arr.join(' => ')}!`)
})
