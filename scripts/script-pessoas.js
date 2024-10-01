const pessoas = [];

function adicionarPessoa() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('alturaPessoa').value);
    const peso = parseFloat(document.getElementById('pesoPessoa').value);

    pessoas.push({ nome, altura, peso });
    
    const tabela = document.getElementById('tabelaPessoas');
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = altura;
    novaLinha.insertCell(2).textContent = peso;

    calcularMedia();
}

function calcularMedia() {
    let totalAltura = 0, totalPeso = 0;

    pessoas.forEach(pessoa => {
        totalAltura += pessoa.altura;
        totalPeso += pessoa.peso;
    });

    const mediaAltura = (totalAltura / pessoas.length).toFixed(2);
    const mediaPeso = (totalPeso / pessoas.length).toFixed(2);

    document.getElementById('mediaAlturaPeso').textContent = `Média de Altura: ${mediaAltura}m, Média de Peso: ${mediaPeso}kg`;
}
