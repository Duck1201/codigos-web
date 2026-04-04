function resultado(){
    let nascimento = Number(document.getElementById('ano').value)
    let texto = document.getElementById('txt')
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - nascimento
    //let res = document.getElementById('res')
    var genero = ''

    if(idade < 0 || idade > 120){
        alert('[ERRO] Digite um valor valido!')
        return
    }else{
        let masculino = document.getElementById('masculino')
        let feminino = document.getElementById('feminino')
        // Imagem
        // JEITO BURRO: 
        // var img = document.createElement('img')
        // img.setAttribute('id', 'foto')
        var img = document.getElementById('foto')
        img.style.display = ('block')

        // Checa a idade dos Homens
        if(masculino.checked){
            genero = 'Homem'
            if(idade <= 13){
                //Criança
                //img.setAttribute('src', 'images/homem-crianca.jpg')
                //res.innerHTML = ''
                img.src = ('images/homem-crianca.jpg')
            }
            else if(idade <= 20){
                //Jovem
                //img.setAttribute('src', 'images/homem-jovem.jpg')
                //res.innerHTML = ''
                img.src = ('images/homem-jovem.jpg')
            }
            else if(idade < 50){
                //Adulto
                //img.setAttribute('src', 'images/homem-adulto.jpg')
                //res.innerHTML = ''
                img.src = ('images/homem-adulto.jpg')
            }
            else if(idade > 50){
                //Idoso
                //img.setAttribute('src', 'images/homem-idoso.jpg')
                //res.innerHTML = ''
                img.src = ('images/homem-idoso.jpg')
            }
        }

        //Checa a idade das Mulheres
        if(feminino.checked){
           genero = 'Mulher'
            if(idade <= 13){
                //Criança
                //img.setAttribute('src', 'images/mulher-crianca.jpg')
                //res.innerHTML = ''
                img.src = ('images/mulher-crianca.jpg')
            }
            else if(idade <= 20){
                // Jovem
                //img.setAttribute('src', 'images/mulher-jovem.jpg')
                //res.innerHTML = ''
                img.src = ('images/mulher-jovem.jpg')
            }
            else if(idade < 50){
                //Adulto
                //img.setAttribute('src', 'images/mulher-adulta.jpg')
                //res.innerHTML = ''
                img.src = ('images/mulher-adulta.jpg')
            }
            else if(idade >= 50){
                //Idoso
                //img.setAttribute('src', 'images/mulher-idosa.jpg')
                //res.innerHTML = ''
                img.src = ('images/mulher-idosa.jpg')
            }
        }
    }
    texto.innerHTML = (`Você é um(a) ${genero} de ${idade} ano(s)`)
    //res.appendChild(img)
}