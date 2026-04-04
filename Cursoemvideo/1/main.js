function horas(){  
    let texto = document.getElementById('horas')
    let imagem = document.getElementsByClassName('dia')[0]
    let horas = new Date()
    let horas_dia = horas.getHours()
    texto.innerText = (`Agora são ${horas_dia} Horas`)
    if(horas_dia < 12){
        document.body.style.background = ('0e4f81')
        imagem.src = 'fotos/dia.jpg'
    }
    else if(horas_dia > 12 && horas_dia <= 18){
        document.body.style.background = ('brown')
        imagem.src = ('fotos/tarde.jpg')
    }else{
        document.body.style.background = ('gray')
        imagem.src = ('fotos/noite.jpg')
    }
}