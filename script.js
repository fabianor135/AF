const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })

    input.value = ''

    monstrarTarefas()

}

function monstrarTarefas() {

    let novaLi = ''

    // ['comprar canais', 'vender canais']
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + ` 

      <li class="task ${item.concluida && "done"}">
        <img src="./img/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
  </li>
`

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    monstrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    monstrarTarefas()
}
function reacaregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
}
    

    monstrarTarefas()
}

reacaregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)