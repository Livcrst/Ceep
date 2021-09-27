const novaTarefa = document.querySelector('[data-form-button]');
const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    console.log(value);

    input.value = " "; // para limpar a caixa de texto da entrada; 
};

novaTarefa.addEventListener('click', criarTarefa(evento));