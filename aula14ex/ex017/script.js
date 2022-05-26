function Somar(){
    var numero1 = document.querySelector("input#numero")
    var numero = (numero1.value)
    var n1 = document.querySelector("option#um")
    var n2 = document.querySelector("option#dois")
    var n3 = document.querySelector("option#tres")
    var n4 = document.querySelector("option#quatro")
    var n5 = document.querySelector("option#cinco")
    var n6 = document.querySelector("option#seis")
    var n7 = document.querySelector("option#sete")
    var n8 = document.querySelector("option#oito")
    var n9 = document.querySelector("option#nove")
    var n10 = document.querySelector("option#dez")
    if(numero == ""){
       alert("Por favor,digite um número!")
    }
    var c = numero
    var resultado = 0
    for(var multiplicador = 1;multiplicador <= 10 ; multiplicador = multiplicador + 1 ){
      if(multiplicador == '1'){
        resultado = c * multiplicador
        n1.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '2'){
       resultado = c * multiplicador
       n2.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '3'){
       resultado = c * multiplicador
       n3.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '4'){
       resultado = c * multiplicador
       n4.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '5'){
       resultado = c * multiplicador
       n5.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '6'){
       resultado = c * multiplicador
       n6.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '7'){
       resultado = c * multiplicador
       n7.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '8'){
       resultado = c * multiplicador
       n8.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '9'){
       resultado = c * multiplicador
       n9.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }else if(multiplicador == '10'){
       resultado = c * multiplicador
       n10.innerHTML=`${c} x ${multiplicador} = ${resultado}`
     }
    }
}
