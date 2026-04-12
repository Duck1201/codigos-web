let add = document.getElementById('add')
let select = document.getElementById('valor')
let conteudo = document.getElementById('conteudo')
let arr = []

add.addEventListener('click', () => {
    let num = document.getElementById('num')
    if(num.value <= 0 || num.value > 100){
        alert('Digite um valor valido')
    }else{
        if(arr.includes(num.value)){
            alert('Esse valor ja foi adicionado')
        }else{
            let option = document.createElement('option')
            option.innerHTML = `O valor ${num.value} foi adicionando`
            select.appendChild(option)
            arr.push(num.value)
            conteudo.innerHTML = ''
        }
    }
})

let finalizar = document.getElementsByClassName('finalizar')[0]
finalizar.addEventListener('click', () => {
    if(arr.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        // FAZ AS OPERAÇÕES
        let ultimo = arr.length - 1
        let total = 0
        for(let i = 0; i <= ultimo; i++){
            total = Number(arr[i]) + total
        }
        let media = total / arr.length
        arr.sort()

        conteudo.innerHTML += ''
        conteudo.innerHTML += `<p>Ao todos, temos ${arr.length} números cadastrados.</p>`
        conteudo.innerHTML += `<p>O maior valor informado foi ${arr[ultimo]}.</p>`
        conteudo.innerHTML += `<p>O menor valor informado foi ${arr[0]}.</p>`
        conteudo.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`
        conteudo.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
})
