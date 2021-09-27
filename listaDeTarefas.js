(() => {
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
    tarefa.appendChild(BotaoExcluir());
    Lista.appendChild(tarefa);
    input.value = " "; // para limpar a caixa de texto da entrada;
};

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConcluir = () => {

    const botaoConcluir = document.createElement('button');

    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'Concluir';

    botaoConcluir.addEventListener('click', Concluir);

    return botaoConcluir;
};

const Concluir = (evento) => {

    const botaoConcluir = evento.target;
    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle('done');
}

BotaoExcluir = () => {
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';

    botaoExcluir.addEventListener('click', excluir);

    return botaoExcluir;

}
const excluir =  (evento) => {
    const botaoExcluir = evento.target;
    const exclusao = botaoExcluir.parentElement;
    exclusao.remove();

    return botaoExcluir;
}
}) ();