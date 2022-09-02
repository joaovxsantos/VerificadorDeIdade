let submit = document.querySelector('#enviar')

function verify() {
    let radio = document.querySelector('input[name="radsex"]:checked').value
    if (radio == "fem") {
        fem()
    } else {
        masc()
    }
}

function masc() {
    let idd = document.querySelector('#idd').value

    let div = document.querySelector('.second')

    let result = 2022 - Number(idd)

    div.innerHTML = `<h3>Detectamos homem com ${result} anos de idade.</h3>`


    if (result < 0 || idd == 0) {
        div.innerHTML = `<h3>Erro! Coloque um ano de nascimento válida</h3>`
    }

    else if (result < 13) {
        div.innerHTML = `<h3>Detectamos menino com ${result} anos de idade.</h3>
        <img src= ./images/hchildren.jpg>`
    }

    else if (result <= 18) {
        div.innerHTML += "<img src =./images/hjovem.png>"
    }

    else if (result < 60) {
        div.innerHTML += "<img src = ./images/hadulto.jpg>"
    }


    else {
        div.innerHTML += "<img src = ./images/hv.jpg>"
    }
}

function fem() {

    let idd = document.querySelector('#idd').value

    let div = document.querySelector('.second')

    let result = 2022 - Number(idd)

    div.innerHTML = `<h3>Detectamos mulher com ${result} anos de idade.</h3>`
    if (result < 0 || idd == 0) {
        div.innerHTML = `<h3>Erro! Coloque um ano de nascimento válida</h3>`
    }
    else if (result < 13) {
        div.innerHTML = `<h3>Detectamos menina com ${result} anos de idade.</h3>
        <img src= ./images/mchildren.jpg>`

    } else if (result <= 18) {
        div.innerHTML += "<img src =./images/mjovem.jpg>"
    } else if (result < 60) {
        div.innerHTML += "<img src =./images/madulta.jpg>"
    } else {
        div.innerHTML += "<img src =./images/mv.jpg>"
    }
}

submit.addEventListener('click', verify)