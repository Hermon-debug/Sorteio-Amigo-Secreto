let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome antes de adicionar.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }
    
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];
    
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${sorteado}`;
    listaResultado.appendChild(li);
}
