function adicionarPessoaWhatsApp() {
    const nome = document.getElementById('nomePessoa').value;
    const telefone = document.getElementById('telefonePessoa').value;
    
    const linkWhatsApp = `https://wa.me/${telefone}`;
    
    const tabela = document.getElementById('tabelaPessoasWhatsapp');
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).innerHTML = `<a href="${linkWhatsApp}" target="_blank">Abrir WhatsApp</a>`;
}
