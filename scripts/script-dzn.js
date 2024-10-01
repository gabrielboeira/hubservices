function gerarDezenas() {
    const dezenas = [];
    while (dezenas.length < 6) {
        const num = Math.floor(Math.random() * 60) + 1;
        if (!dezenas.includes(num)) {
            dezenas.push(num);
        }
    }
    document.getElementById('dezenas').textContent = `Dezenas: ${dezenas.join(', ')}`;
}
