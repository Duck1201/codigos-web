const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')

// Codigo Index (BLOQUEIO)

// Botão 1 == Sim
botao1.addEventListener('mouseenter', () => {
    botao1.style.background = 'black'
    botao1.style.color = 'white'

    botao2.style.background = 'white'
    botao2.style.border = '1px solid black'
    botao2.style.color = 'black'

// ---------------------------------------- //
    botao1.style.transform = 'scale(1.1)'
})

botao1.addEventListener('mouseleave', () => {
    botao1.style.transform = 'scale(1)'
})

botao1.addEventListener('click', () => {
    window.location.href = 'html/main.html'
})

// Botão 2 == Não
botao2.addEventListener('mouseenter', () => {
    botao2.style.background = 'black'
    botao2.style.color = 'white'

    botao1.style.background = 'white'
    botao1.style.border = '1px solid black'
    botao1.style.color = 'black'

// ---------------------------------------- //
    botao2.style.transform = 'scale(1.1)'
})

botao2.addEventListener('mouseleave', () => {
    botao2.style.transform = 'scale(1)'
})

botao2.addEventListener('click', () => {
    window.location.href = 'html/falha.html'
})

// ---------------------------------------------------------------- //

