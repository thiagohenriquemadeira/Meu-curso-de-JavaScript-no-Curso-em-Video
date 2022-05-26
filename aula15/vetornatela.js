let valores = [3, 4, 5, 1, 6, 8, 9]
valores.push(1)
valores.sort()
console.log(valores)
/*
for(pos = 0;pos < valores.length;pos++){
   console.log(`A posição ${pos} temo o valor ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} temo o valor ${valores[pos]}`)
}