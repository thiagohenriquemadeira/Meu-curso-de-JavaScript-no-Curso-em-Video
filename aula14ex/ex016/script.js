function contar(){
var resposta = document.querySelector('div#calculo');
var inicio1 = document.querySelector('input#inicio');
var fim1  = document.querySelector('input#Fim');
var passo1 = document.querySelector('input#Passo');
var fim = (fim1.value)
var passo = (passo1.value)
var texto = document.querySelector('div#texto')
var texto2 = document.querySelector('div#texto2')
var inicio = (inicio1.value)
texto.innerHTML= "Contando:"
texto2.style.display ='none'
resposta.innerHTML = '<div> </div>'
    if(inicio == "" ||fim == "" ){
      texto.innerHTML = "Impossivel contar" 
    }else{ 
      if(passo == '0' || passo == '' ){
      alert('Passo inválido! Considerando PASSO 1')
      var fim = Number(fim1.value)
      var passo = Number(passo1.value)
      var passo = 1     
      for(var inicio = Number(inicio1.value);inicio <= fim;inicio = inicio + passo){
        resposta.innerHTML += `${inicio} `
       }
      }
       var inicio = Number(inicio1.value)
       var fim = Number(fim1.value)
       var passo = Number(passo1.value)
       if(inicio > fim){  
         for(var inicio = Number(inicio1.value);inicio >= fim;inicio = inicio - passo){
          resposta.innerHTML += `${inicio} `
          }
       }else{ 
         for(var inicio = Number(inicio1.value);inicio <= fim;inicio = inicio + passo){
             resposta.innerHTML += `${inicio} `
         }
        }
    }
}
