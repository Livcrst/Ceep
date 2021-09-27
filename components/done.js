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

export default BotaoConcluir;
