function verificar(){
    var valor = document.getElementById('pergunta').value
    var resultado = document.getElementById('resultado')
    if(valor.toLowerCase() == 'brasil'){
        resultado.innerHTML = ('Você é <strong>brasileiro!</strong>')    
    }else{
        resultado.innerHTML = ('Você é <strong>estrangeiro!</strong>')
    }
}