function calc() {
    let num = document.querySelector('#num')
    let n1 = Number(num.value)
    if (num.value.length == 0) {
        alert('[ERRO] Por favor, preencha os campos obrigatórios.')
    } else {
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            let txtItem = document.createTextNode(`${n1} X ${c} = ${n1 * c}`)
            item.value = `tab${c}`
            item.appendChild(txtItem)
            document.getElementById('res').appendChild(item)
        }
    }
    
}
