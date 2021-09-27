const novaTarefa = document.querySelector('[data-form-button]');
const criarTarefa = (evento) => {

    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
   
    const Lista = document.querySelector('[data-list]');
    const  tarefa = document.createElement('li');


    tarefa.classList.add('task');

    const conteudo = `<p class="content"> ${value}</p>`;
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConcluir());
    Lista.appendChild(tarefa);
    input.value = " "; // para limpar a caixa de texto da entrada;
};

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConcluir = () => {

    const botaoConcluir = document.createElement('button');

    botaoConcluir.addEventListener('click', () => {
        
        console.log("TESTE: fui clicado")
    });

    return botaoConcluir;
};