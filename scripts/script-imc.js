function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    document.getElementById('resultadoIMC').textContent = `Seu IMC é ${imc}`;
}
