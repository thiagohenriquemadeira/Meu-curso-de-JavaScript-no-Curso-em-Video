var inicio1 = 5
var fim1 = 1
var passo1 = 1 
if(inicio == ""){
    texto.innerHTML = "Impossivel contar" 
}else if(inicio1 < fim1 ){
    var fim = Number(fim1.value)
    var passo = Number(passo1.value)     
    for(var inicio = Number(inicio1.value);inicio >= fim;inicio = inicio - passo){
         resposta.innerHTML += `${inicio}`
    }
}else if(passo == '0'|| passo == ''){
     alert('Passo inválido! Considerando PASSO 1')
     var fim = Number(fim1.value)
     var passo = Number(passo1.value)
     var passo = 1     
     for(var inicio = Number(inicio1.value);inicio <= fim;inicio = inicio + passo){
     resposta.innerHTML += `${inicio}`
     }
}else{
var fim = Number(fim1.value)
var passo = Number(passo1.value)     
for(var inicio = Number(inicio1.value);inicio <= fim;inicio = inicio + passo){
    resposta.innerHTML += `${inicio}`
}
}