function verificar() {
var mas = document.querySelector("input#mas")
var fem = document.querySelector("input#fem")
var nasc = document.querySelector("input#idade")
var nasci = Number (nasc.value)
var img = document.querySelector("img#imagem")
var value = document.querySelector('input[name="sexo"]:checked').value;
var text = document.querySelector("div#texto")
var senh = document.querySelector("img#ima")
var agora = new Date()
var ano = agora.getFullYear()
var idade = ano - nasci
if (value == 'mas' && idade >= 12 && idade <= 18) {
    senh.style.display = "none"
    img.style.display = 'inline-block'
    img.src = "garoto.jpg"
    text.innerHTML = `Detectamos uma Homen de ${idade} anos.`
} else if (value == 'fem' && idade >= 18 && idade <= 40) {
    senh.style.display = "none"
    img.style.display = 'inline-block'
    text.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
    img.src = "woman.webp"
} else if (value == 'fem' && idade >= 40 ) {
    senh.src = "senhora.jpg"
    img.style.display = "none"
    senh.style.display = 'inline-block'
    text.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
} if (value == 'mas' && idade >= 40 && nasci > 0 ) {
    senh.style.display = "none"
    img.src = "senhor.jpg"
    img.style.display = 'inline-block'
    text.innerHTML = `Detectamos um Homen de ${idade} anos.`
} else  if (value == 'mas' && idade >= 18 && idade <= 40 ) {
    senh.style.display = "none"
    img.src = "homan.jpg"
    img.style.display = 'inline-block'
    text.innerHTML = `Detectamos um Homen de ${idade} anos.`
} else if (value == 'fem' && idade >= 12 && idade <= 18) {
    senh.style.display = "none"
    img.style.display = 'inline-block'
    img.src = "garota.jpg"
    text.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
}if ( idade == ano) {
    senh.style.display = "none"
    img.style.display = "none"
    text.innerHTML = "Coloque seu ano de nascimento"
}else if (value == 'fem' && idade >= 1 && idade <= 12) {
    senh.style.display = "none"
    img.style.display = 'inline-block'
    img.src = "criança.menina.jpg"
    text.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
}else if (value == 'mas' && idade >= 1 && idade <= 12) {
    senh.style.display = "none"
    img.style.display = 'inline-block'
    img.src = "criança.garoto.jpg"
    text.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
}
}