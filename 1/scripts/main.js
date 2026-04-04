function pedido(){
    var pedido = confirm('Ola mundo?')
    if (pedido == true){
        alert('Belezura')
    }else{
        alert('A vida é dura...')
    }
}

function pergunta(){
    let n1 = Number(prompt('Digite um número qualquer: '))
    let n2 = Number(prompt('Digite outro número qualquer: '))
    let soma = n1 + n2
    document.writeln(`Resultado: <strong>${soma}</strong>`)
}
function alerta(){
    alert('Tim maia')
}
function teste(){
    let salario = 2145.50
    let salario_R = salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    console.log(salario_R)
}
teste()