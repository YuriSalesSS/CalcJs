let botoes = document.querySelectorAll('button')
let display = document.getElementById('display')

botoes.forEach(function (button){
    button.addEventListener('click', function(){
        display.value = `${button.textContent}`
    })
    
})