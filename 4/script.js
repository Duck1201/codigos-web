function verificar(){
    let resultado = document.querySelector('div#resultado')
    let input1 = Number(document.getElementById('entrada').value)
    let input2 = Number(document.getElementById('entrada2').value)
    let soma = (input1 + input2)
    resultado.innerHTML = (soma)
}