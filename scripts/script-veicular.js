function calcularFinanciamentoVeicular() {
    const valorBem = parseFloat(document.getElementById('valorBem').value);
    const prazo = parseInt(document.getElementById('prazoFin').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;

    const parcela = (valorBem * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -prazo));
    document.getElementById('resultadoFinanciamento').textContent = `Valor da parcela: R$ ${parcela.toFixed(2)}`;
}
