function criaLinha(){
    //Cria um objeto que representa um h2
    const h2 = window.
        document.
        createElement("h2");
    //Lê, via prompt, dados de cadastro
    const c = lerCadastro();
    //Adiciona um texto ao h2 com os dados de cadastro
    h2.textContent = `[Nome: ${c.nome},
        Idade: ${c.idade},
        Matriculado?: ${c.matricula}]`;
    //Pesquisa pelo primeiro button do documento html
    const btn = window.document
        .querySelector("button");
    //Insere o h2 logo depois do button
    btn.after(h2);
}

function lerCadastro(){
    const nomePrompt = prompt("Digite o seu nome");
    const idadePrompt = prompt("Digite a sua idade");
    const matriculaPrompt = prompt("Está matriculado?");
    return{
        nome: nomePrompt,
        idade: idadePrompt,
        matricula: matriculaPrompt,
    }
}