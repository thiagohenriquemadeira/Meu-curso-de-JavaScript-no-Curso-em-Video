function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano){
   window.alert('[ERRO] Verificar os dados e tente novamente!')
}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        gênero = 'Homen'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'bebemenino.png')
        } else if(idade < 21 ){
           //Jovem
           img.setAttribute('src', 'Garotojovem.png')
        }else if(idade < 50){
          //Adulto
          img.setAttribute('src','Homenadulto.png')
        }else{
          //Idoso
          img.setAttribute('src', 'senhor.png')
        }
    } else if(fsex[1].checked){
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','bebemenina.png')
        } else if(idade < 21 ){
            //Jovem
            img.setAttribute('src','Garotajovem.png')
        }else if(idade < 50){
           //Adulto
            img.setAttribute('src','Mulheradulto.png')
        }else{
           //Idoso
            img.setAttribute('src','Senhora.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
}