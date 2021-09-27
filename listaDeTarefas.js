const novaTarefa = document.querySelector('[data-form-button]');
const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    

    const tarefa = document.querySelector('[data-task]');
    const conteudo = `<p class="content"> ${valor}</p>`;

    tarefa.innerHTML = conteudo; 
    input.value = " "; // para limpar a caixa de texto da entrada;
};

novaTarefa.addEventListener('click', criarTarefa);