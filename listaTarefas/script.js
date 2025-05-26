let tarefas = []
let opcao = ""

    while (opcao !== "5") {
      opcao = prompt(
        "O que você deseja fazer?\n\n" +
        "1 - Adicionar tarefa\n" +
        "2 - Listar tarefas\n" +
        "3 - Remover tarefa\n" +
        "4 - Concluir tarefa\n" +
        "5 - Sair"
      )
      if (opcao === "1") {
        const novaTarefa = prompt("Digite a sua tarefa:")
        if (novaTarefa) {
          tarefas.push(novaTarefa)
          alert("Tarefa adicionada com sucesso!")
        }

      } else if (opcao === "2") {
        if (tarefas.length === 0) {
          alert("Nenhuma tarefa na lista.")
        } else {
          let lista = "📋 Tarefas:\n\n"
          tarefas.forEach((t, i) => {
            lista += `${i} - ${t}\n`
          })
          alert(lista)
        }

      } else if (opcao === "3") {
        const index = prompt("Qual tarefa que deseja remover?:")
        if (index >= 0 && index < tarefas.length) {
          tarefas.splice(index, 1)
          alert("Tarefa removida com sucesso!.")
        } else {
          alert("Tarefa inválida!")
        }

      } else if (opcao === "4") {
        const index = prompt("Qual tarefa está concluida?:")
        if (index >= 0 && index < tarefas.length) {
          tarefas[index] = "✅ " + tarefas[index]
          alert("Tarefa concluída!!")
        } else {
          alert("Tarefa inválida!")
        }

      } else if (opcao === "5") {
        alert("Encerrando o programa. Até logo!")}

    } 

    // function adicionarTarefa() {
    //   const descricaoTarefa = prompt('Digite sua tarefa: ')

    //   if (descricaoTarefa !== "") {
    //     tarefas.push({ texto: descricaoTarefa, concluida: false })
    //     renderizarTarefas()
    //     document.getElementById('tarefa').value = ""
    //   }
    // }

    // function limparTarefa() {
    //   tarefas = []
    //   renderizarTarefas()
    // }

    // function excluirTarefa(index) {
    //   tarefas.splice(index, 1)
    //   renderizarTarefas()
    // }

    // function concluirTarefa(index) {
    //   tarefas[index].concluida = !tarefas[index].concluida
    //   renderizarTarefas()
    // }

    // function renderizarTarefas() {
    //   const listaTarefa = document.getElementById('taskList')
    //   listaTarefa.innerHTML = ""

    //   tarefas.forEach((tarefa, index) => {
    //     listaTarefa.innerHTML += `
    //       <li>
    //         <span class="${tarefa.concluida ? 'concluida' : ''}">${tarefa.texto}</span>
    //         <div>
    //           <button class="complete-btn" onclick="concluirTarefa(${index})">
    //             ${tarefa.concluida ? 'Desfazer' : 'Concluir'}
    //           </button>
    //           <button class="delete-btn" onclick="excluirTarefa(${index})">Excluir</button>
    //         </div>
    //       </li>
    //     `
    //   })
    // }