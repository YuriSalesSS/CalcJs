let botoes = document.querySelectorAll('button');  
let display = document.getElementById('display'); 

let entradaAtual = '';  
let entradaAnterior = '';  
let operadorAtual = '';  

// Função para atualizar o display
function atualizarDisplay() {
    display.value = entradaAtual;  // Atualiza o valor do display com o valor da variável entradaAtual
}

// Adiciona os eventos de clique aos botões
botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Se o botão for um número (0-9) ou ponto (.), adiciona ao número atual
        if (botao.textContent >= '0' && botao.textContent <= '9' || botao.textContent === '.') {
            entradaAtual += botao.textContent;  // Adiciona o número ou ponto ao número atual
            atualizarDisplay();  // Atualiza o display com o novo número
        }
        // Se o botão for um operador (+, -, *, /), armazena o operador e o número atual
        else if (botao.classList.contains('operator')) {
            if (entradaAtual !== '') {  // Verifica se há algum número digitado antes de adicionar o operador
                entradaAnterior = entradaAtual;  // Armazena o número atual
                entradaAtual = '';  // Limpa a entrada para o próximo número
            }
            operadorAtual = botao.textContent;  // Armazena o operador escolhido (+, -, *, /)
        }
        // Se o botão for "C", limpa a entrada e o display
        else if (botao.classList.contains('clear')) {
            entradaAtual = ''; 
            entradaAnterior = '';
            operadorAtual = '';
            atualizarDisplay();  // Atualiza o display com a entrada limpa
        }
       
    });
});
