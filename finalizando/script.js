
function meuCarro() {
    
    const meusCarros = document.getElementById("carros")
    const selectedCar = meusCarros.options[meusCarros.selectedIndex].text
    const imgCar = '<img src="./imagens/imagemBusca/' + selectedCar + '-1.jpg">';
    document.getElementById("conteudo").innerHTML = "<h1>" + selectedCar + "<h1>" + imgCar;
    console.log(selectedCar)

}


// 