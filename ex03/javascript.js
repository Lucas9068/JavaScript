function calc() {
    let res = document.getElementById('res')
    let init = document.querySelector('#num1')
    let end = document.querySelector('#num2')
    let step = document.querySelector('#num3')
    let n1 = Number(init.value)
    let n2 = Number(end.value)
    let n3 = Number(step.value)
    if (init.value.length == 0 || n2 == 0) {
        alert("[ERRO!] Preencha corretamente os campos indicados.")
        res.innerHTML = `Impossível contar. );`
    } else if (step.value.length == 0 || n3 == 0) {
        alert('[ERRO!] Passo com valor inválido, valor será reajustado para 1.')
        n3 = 1
        res.innerHTML = `Contando:<br>`
        for (n1; n1 <= n2; n1 += n3) {
            res.innerHTML += `-> ${n1}`
        }
    } else if (n2 < n1) {
        res.innerHTML = `Contando:<br>`
        for (n1; n2 <= n1; n1 -= n3) {
            res.innerHTML += `-> ${n1}`
        }
    }
}
