function contar() {
    let start= document.getElementById('txti')
    let end= document.getElementById('txtf')
    let step= document.getElementById('txtp')
    let res= document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert(`[ERRO] Você não colocou dados nas caixas`)
    } else {
        res.innerHTML=`Contando:`
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)

        if (p<=0) {
            window.alert(`Passo invalido`)
        }
      if (i < f) {
        //Contagem crescente
            for (let c = i; c <= f; c+=p) {
                res.innerHTML+= `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
    } else {
        //Contagem Decrescente
        for (let c = 1; c>=f ; c-=p) {
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }
}