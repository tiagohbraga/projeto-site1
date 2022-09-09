//Item

const nomePrimeiroItem = 'travesseiro da nasa'
const tamanhoPrimeiroItem = Number(30)
let confortoPrimeiroItem = true
const alturaPrimeiroItem = [25]

const nomeSegundoItem = 'Travesseiro Ortpédico'
const tamanhoSegundoItem = Number(50)
let confortoSegundoItem = true
const alturaSegundoItem = [30]

const nomeTerceiroItem = 'Travesseiro Fino' 
const tamanhoTerceiroItem =Number(25)
let confortoTerceiroItem = false
const alturaTerceiroItem = [5]


const mediaTamanho = ((tamanhoPrimeiroItem + tamanhoSegundoItem + tamanhoTerceiroItem)/3)
const conforto = confortoPrimeiroItem && confortoSegundoItem && confortoTerceiroItem

if(confortoPrimeiroItem==true){
    confortoPrimeiroItem="Sim"
}

if(confortoSegundoItem==true){
    confortoSegundoItem="Sim"
}

if(confortoTerceiroItem==false){
    confortoTerceiroItem='Não'
}

console.log(`Nome: ${nomePrimeiroItem.toUpperCase()}
Tamanho: ${tamanhoPrimeiroItem}cm
É confortavel? ${confortoPrimeiroItem} 
Altura? ${alturaPrimeiroItem}cm`)

console.log(`Nome: ${nomeSegundoItem.toUpperCase()}
Tamanho: ${tamanhoSegundoItem}cm
É confortavel? ${confortoSegundoItem} 
Altura? ${alturaSegundoItem}cm`)

console.log(`Nome: ${nomeTerceiroItem.toUpperCase()}
Tamanho: ${tamanhoTerceiroItem}cm
É confortavel? ${confortoTerceiroItem} 
Altura? ${alturaTerceiroItem}cm`)



