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

    let p = document.querySelector('#p3')

    let img = document.getElementById("img")

    let result = 2022 - Number(idd)

    p.innerText = `Detectamos homem com ${result} anos de idade.`


    if (result < 0){
        p.innerText = `Erro! Coloque um ano de nascimento válido`
    }
    else if (result < 13) {
        img.src = "./images/hchildren.jpg"
        p.innerText = `Detectamos menino com ${result} anos de idade.`
    } else if (result <= 18) {
        img.src = "./images/hjovem.png"
    } else if (result < 60) {
        img.src = "./images/hadulto.jpg"
    } else {
        img.src = "./images/hv.jpg"
    }
}

function fem() {

    let idd = document.querySelector('#idd').value

    let p = document.querySelector('#p3')

    let img = document.getElementById("img")

    let result = 2022 - Number(idd)

    p.innerText = `Detectamos mulher com ${result} anos de idade.`
    if (result < 0){
        p.innerText = `Erro! Coloque um ano de nascimento válido`
    }
    else if (result < 13) {
        img.src = "./images/mchildren.jpg"
        p.innerText = `Detectamos menina com ${result} anos de idade`
    } else if (result <= 18) {
        img.src = "./images/mjovem.jpg"
    } else if (result < 60) {
        img.src = "./images/madulta.jpg"
    } else {
        img.src = "./images/mv.jpg"
    }
}

submit.addEventListener('click', verify)