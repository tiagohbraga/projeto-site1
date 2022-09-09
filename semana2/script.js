//Item

// const nomePrimeiroItem = 'travesseiro da nasa'
// const tamanhoPrimeiroItem = Number(30)
// let confortoPrimeiroItem = true
// const alturaPrimeiroItem = [25]

// const nomeSegundoItem = 'Travesseiro Ortpédico'
// const tamanhoSegundoItem = Number(50)
// let confortoSegundoItem = true
// const alturaSegundoItem = [30]

// const nomeTerceiroItem = 'Travesseiro Fino' 
// const tamanhoTerceiroItem =Number(25)
// let confortoTerceiroItem = false
// const alturaTerceiroItem = [5]


// const mediaTamanho = ((tamanhoPrimeiroItem + tamanhoSegundoItem + tamanhoTerceiroItem)/3)
// const conforto = confortoPrimeiroItem && confortoSegundoItem && confortoTerceiroItem

// if(confortoPrimeiroItem==true){
//     confortoPrimeiroItem="Sim"
// }

// if(confortoSegundoItem==true){
//     confortoSegundoItem="Sim"
// }

// if(confortoTerceiroItem==false){
//     confortoTerceiroItem='Não'
// }

// console.log(`Nome: ${nomePrimeiroItem.toUpperCase()}
// Tamanho: ${tamanhoPrimeiroItem}cm
// É confortavel? ${confortoPrimeiroItem} 
// Altura? ${alturaPrimeiroItem}cm`)

// console.log(`Nome: ${nomeSegundoItem.toUpperCase()}
// Tamanho: ${tamanhoSegundoItem}cm
// É confortavel? ${confortoSegundoItem} 
// Altura? ${alturaSegundoItem}cm`)

// console.log(`Nome: ${nomeTerceiroItem.toUpperCase()}
// Tamanho: ${tamanhoTerceiroItem}cm
// É confortavel? ${confortoTerceiroItem} 
// Altura? ${alturaTerceiroItem}cm`)

objeto1 = {
    nomePrimeiroItem :'Travesseiro da nasa'.toUpperCase(),
    tamanhoPrimeiroItem : Number(30),
    confortoPrimeiroItem : false,
    alturaPrimeiroItem : 25
}

objeto2 = {
    nomeSegundoItem : 'Travesseiro Ortpédico'.toUpperCase(),
    tamanhoSegundoItem : Number(50),
    confortoSegundoItem : true,
    alturaSegundoItem : 30
}

objeto3 = {
    nomeTerceiroItem : 'Travesseiro Fino'.toUpperCase(),
    tamanhoTerceiroItem : Number(25),
    confortoTerceiroItem : false,
    alturaTerceiroItem : 5
}


let todosObjetos = []

// if(objeto1.confortoPrimeiroItem === true){
//     todosObjetos.push(objeto1)    
// }

// if(objeto2.confortoSegundoItem===true){
//     todosObjetos.push(objeto2)
// }

// if(objeto3.confortoTerceiroItem === true){
// todosObjetos.push(objeto3)
// }else{alert('o item com false não foi adicionado')}    

//com ternario
objeto1.confortoPrimeiroItem===true?todosObjetos.push(objeto1):alert('o item 1 não foi adicionado!')
objeto2.confortoSegundoItem===true?todosObjetos.push(objeto2):alert('o item 2 não foi adicionado!')
objeto3.confortoTerceiroItem===true?todosObjetos.push(objeto3):alert('o item 3 não foi adicionado!')

console.log(todosObjetos)