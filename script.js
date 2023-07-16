function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('light');
    const img = document.querySelector("#profile img")


    if (html.classList.contains("light")) {
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Myke Brite sorrindo, usando óculos escuro e camisa cinza, barba e fundo gradiente azul e roxo')

    } else {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de Myke Brite sorrindo, usando óculos e camisa preta, barba e fundo amarelo')
    }

}