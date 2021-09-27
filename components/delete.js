const BotaoExcluir = () => {
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';

    botaoExcluir.addEventListener('click', excluir);

    return botaoExcluir;

}
const excluir = (evento) => {
    const botaoExcluir = evento.target;
    const exclusao = botaoExcluir.parentElement;
    exclusao.remove();

    return botaoExcluir;
}


export default BotaoExcluir;