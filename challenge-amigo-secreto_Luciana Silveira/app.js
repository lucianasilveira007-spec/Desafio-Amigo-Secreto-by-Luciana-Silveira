// 1) Crie um array para armazenar os nomes
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bem-vindo ao amigo oculto online!'

let amigos = [];
let lista = document.getElementById('listaAmigos');

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();

    if (nome === '') {
        alert("Por favor, insira um nome!");
        return;
    } else {
        amigos.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}

// Função para limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

// Função para atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear quatro amigo secreto
function sortearAmigo() {
    if (amigos.length <4) {
        alert('Adicione pelo menos quatro nomes para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O(A) amigo(a) oculto(a) é: ${amigoSorteado}</li>`;
}

// Função para limpar a lista e recomeçar o sorteio
function limparLista() {
    amigos = [];
    atualizarLista();
    resultado.innerHTML = '';
}