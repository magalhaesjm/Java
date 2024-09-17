let contador = 0
let res = document.querySelector('section#result')


function contar() {
    contador ++
res.innerHTML = `<p>O contardor está com <mark>${contador}</mark> cliques.</p>`
}


function zerar() {
    contador = 0
    res.innerHTML = nu11
}