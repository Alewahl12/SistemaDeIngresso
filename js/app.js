function comprar(){
    //Pegar tipo do ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    tipoIngresso = `qtd-${tipoIngresso}`;
    console.log(tipoIngresso);
    //Pegar a quantidade de ingressos
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    console.log(quantidadeIngresso);

    //Descontar da quantidade disponivel a quantidade do ingresso selecionado
    let selecionarIngressosDisponivel = document.getElementById(tipoIngresso);
    switch (tipoIngresso){
        case "qtd-pista":
            quantidadePista -= quantidadeIngresso;
            selecionarIngressosDisponivel.innerHTML = quantidadePista;
            break;
        case "qtd-superior":
            quantidadeSuperior -= quantidadeIngresso;
            selecionarIngressosDisponivel.innerHTML = quantidadeSuperior;
            break;
        case "qtd-inferior":
            quantidadeInferior -= quantidadeIngresso;
            selecionarIngressosDisponivel.innerHTML = quantidadeInferior;
            break;
        default:
            console.log('Tipo de ingresso invalido!');
    }

}

let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);