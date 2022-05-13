function hora() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    if (hour > 0 && hour <= 12) {
        msg.innerHTML = `Agora são ${hour}:${minute}. Bom dia!`
        img.src = 'imagens/fotomanha.png'
    } else if (hour <= 18) {
        msg.innerHTML = `Agora são ${hour}:${minute}. Boa tarde!`
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#FF874E'
    } else {
        msg.innerHTML = `Agora são ${hour}:${minute}. Boa noite!`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#111030'
    }
}
