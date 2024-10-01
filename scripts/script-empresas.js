function adicionarEmpresa() {
    const nome = document.getElementById('nomeEmpresa').value;
    const site = document.getElementById('siteEmpresa').value;
    const instagram = document.getElementById('instagramEmpresa').value;
    
    const tabela = document.getElementById('tabelaEmpresas');
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).innerHTML = `<a href="${site}" target="_blank">@${site}</a>`;
    novaLinha.insertCell(2).innerHTML = `<a href="https://instagram.com/${instagram}" target="_blank">@${instagram}</a>`;
}
