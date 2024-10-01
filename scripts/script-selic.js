function calcularRendimentoSELIC() {
    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const selic = parseFloat(document.getElementById('selic').value) / 100;

    const rendimento = (valor * Math.pow(1 + selic / 12, prazo)).toFixed(2);
    document.getElementById('resultadoSELIC').textContent = `Rendimento total: R$ ${rendimento}`;
}
