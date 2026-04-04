const teste = document.getElementById('teste')

// Eventos
teste.addEventListener('mouseenter', entrou)
teste.addEventListener('mouseleave', saiu)
teste.addEventListener('click', clicou)


// Funções
function entrou(){
    teste.style.background = ('red')
    teste.innerText = ('Entrou')
}

function saiu(){
    teste.style.background = ('green')
    teste.innerText = ('Saiu')
}

function clicou(){
    teste.style.background = ('gold')
    teste.innerText = ('Clicou')
}