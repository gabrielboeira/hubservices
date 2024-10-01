function adicionarFuncionario() {
    const nome = document.getElementById('nomeFunc').value;
    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const horasExtras = parseFloat(document.getElementById('horasExtras').value);
    const insalubridade = parseFloat(document.getElementById('insalubridade').value) / 100;
    const periculosidade = parseFloat(document.getElementById('periculosidade').value) / 100;
    const deducaoInss = parseFloat(document.getElementById('deducaoInss').value);
    const deducaoIrpf = parseFloat(document.getElementById('deducaoIrpf').value);
    const deducaoVt = parseFloat(document.getElementById('deducaoVt').value);
    
    const totalInsalubridade = salarioBase * insalubridade;
    const totalPericulosidade = salarioBase * periculosidade;
    const totalExtras = horasExtras * (salarioBase / 220);
    
    const total = salarioBase + totalExtras + totalInsalubridade + totalPericulosidade - deducaoInss - deducaoIrpf - deducaoVt;
    
    const tabela = document.getElementById('tabelaFuncionarios');
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = `R$ ${salarioBase.toFixed(2)}`;
    novaLinha.insertCell(2).textContent = horasExtras;
    novaLinha.insertCell(3).textContent = `${(insalubridade * 100).toFixed(2)}%`;
    novaLinha.insertCell(4).textContent = `${(periculosidade * 100).toFixed(2)}%`;
    novaLinha.insertCell(5).textContent = `R$ ${deducaoInss.toFixed(2)}`;
    novaLinha.insertCell(6).textContent = `R$ ${deducaoIrpf.toFixed(2)}`;
    novaLinha.insertCell(7).textContent = `R$ ${deducaoVt.toFixed(2)}`;
    novaLinha.insertCell(8).textContent = `R$ ${total.toFixed(2)}`;
}
