function verificar() {
    let date = new Date()
    let year = date.getFullYear()
    let txtdate = document.querySelector('#nasc')
    let bornDate = Number(txtdate.value)
    let age = year - bornDate
    let res = document.querySelector('#res')
    if (txtdate.value.length == 0 || bornDate > year) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let gender = ''
        var sex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (sex[0].checked) {
            gender = 'Homem'
            if (age <= 10) {
                img.setAttribute('src', 'imagens/garotomenos10.png')
            } else if (age <= 21) {
                img.setAttribute('src', 'imagens/garotomenos20.png')
            } else if (age <= 50) {
                img.setAttribute('src', 'imagens/homemmenos40.png')
            } else {
                img.setAttribute('src', 'imagens/vovoh60anos.png')
            }
        } else if (sex[1].checked) {
            gender = 'Mulher'
            if (age <= 10) {
                img.setAttribute('src', 'imagens/garotamenos10.png')
            } else if (age <= 21) {
                img.setAttribute('src', 'imagens/garotamenos20.png')
            } else if (age <= 50) {
                img.setAttribute('src', 'imagens/mulher40anos.png')
            } else {
                img.setAttribute('src', 'imagens/vovof60anos.png')
            }
        }
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }


}