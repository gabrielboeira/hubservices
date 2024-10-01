function validarLogin() {
    // Aqui você pode adicionar lógica de validação simples
    // Por exemplo, um usuário e senha fixos

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Exemplo de validação simples
    if (username === "admin" && password === "1234") {
        // Redireciona para index.html
        window.location.href = "login.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}