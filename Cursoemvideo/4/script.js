const res = document.getElementById('res')
const num = document.getElementById('num')
const tabuada = document.getElementById('tabuada')
res.addEventListener('click', () => {
    if(num.value.length == 0){
        alert('Por favor, digite um número.')
    }else{
        let n = Number(num.value)
        tabuada.innerHTML = ''
        for(let i = 0; i <= 10 ; i++){
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${i} = ${n*i}`
            tabuada.appendChild(item)
        }
    }
})