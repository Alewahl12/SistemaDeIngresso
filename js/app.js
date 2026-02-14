function comprar(){
    //Pegar tipo do ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //Pegar a quantidade de ingressos
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    //Pegar campo de quantidade para zerar o input anterior
    let quantidadeIngressoTexto = document.getElementById('qtd');
    
    if (quantidadeIngresso <= 0 || isNaN(quantidadeIngresso)){
        alert('Quantidade inválida!');
        quantidadeIngressoTexto.value = '';
        return;
    }

    //Descontar da quantidade disponivel a quantidade do ingresso selecionado
    verificarQuantidadeDisponivel(tipoIngresso,quantidadeIngresso);
    quantidadeIngressoTexto.value = '';

}

//Funcao para verificar a quantidade de ingressos disponivel e realizar a compra
function verificarQuantidadeDisponivel(tipo,quantidadeDesejada){
    let selecionarIngressosDisponivel = document.getElementById(`qtd-${tipo}`);
    if (estoqueIngressos[tipo]>=quantidadeDesejada){
        estoqueIngressos[tipo] -= quantidadeDesejada;
        selecionarIngressosDisponivel.innerHTML = estoqueIngressos[tipo];
    }else{
        alert('Quantidade desejada não pode ser maior que a disponivel');
    }
}

//Dicionario dos tipos de ingressos
let estoqueIngressos = {
    pista: parseInt(document.getElementById('qtd-pista').textContent),
    superior: parseInt(document.getElementById('qtd-superior').textContent),
    inferior: parseInt(document.getElementById('qtd-inferior').textContent)
}