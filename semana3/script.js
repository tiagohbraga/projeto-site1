//parte 1
let objetos = [{
    nome : 'Travesseiro da nasa'.toUpperCase(),
    tamanho : Number(30),
    conforto : false,
    altura : [25]
},
{
    nome : 'Travesseiro Ortpédico'.toUpperCase(),
    tamanho : Number(50),
    conforto : true,
    altura : [30]
},

{
    nome: 'Travesseiro Fino'.toUpperCase(),
    tamanho: Number(25),
    conforto : true,
    altura: [5]
}];



for(let i of objetos){
   console.log(`
   ${i.nome.toUpperCase()}
   Tamanho: ${i.tamanho}
   Conforto: ${i.conforto}
   Altura: ${i.altura}`)
}
console.log("")
//parte 2
for(let objeto of objetos){
    for(propriedade in objeto){
        console.log(`${propriedade} : ${objeto[propriedade]}`)
    }
}
console.log("")   
//parte 3



function Travesseiros(objeto) {
   for(let i in objeto){
    console.log(`
    ${objeto[i].nome.toUpperCase()}
    ${objeto[i].tamanho}
    ${objeto[i].conforto}
    ${objeto[i].altura}
    `)
   }    
}
Travesseiros(objetos)

//parte 4

//Crie uma função que recebe um array de objetos e uma string.
const arrayString = objetos.map((objeto)=>{
   if(objeto.nome){
    console.log(objeto.nome) 
   }else{alert('Item não encontrado')}  
})






//Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


