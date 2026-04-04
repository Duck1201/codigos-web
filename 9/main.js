const titulo = document.getElementById('titulo')
const verificar = document.getElementById('botao_resultado')

verificar.addEventListener('click', resultado)
function resultado(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const n3 = Number(document.getElementById('n3').value)
    let total = (n1 + n2 + n3)
    let media = (total / 3)
    if(media >= 60 && media <= 100){
        titulo.innerHTML = (`Situação:<br> Aprovado`)
        setTimeout(() => {
            titulo.innerText = ('Verificar Alunos')
        }, 5000);        
    }else if(media >= 30 && media < 60){
        titulo.innerHTML = (`Situação:<br> Recuperação`)
        setTimeout(() => {
            titulo.innerText = ('Verificar Alunos')
        }, 5000);
    }else if(media < 30){
        titulo.innerHTML = (`Situação:<br> Reprovado`)
        setTimeout(() => {
            titulo.innerText = ('Verificar Alunos')
        }, 5000);
    }else{
        titulo.innerHTML = (`Nota invalida<br>0 - 100`)
        setTimeout(() => {
            titulo.innerText = ('Verificar Alunos')
        }, 5000);
    }
}