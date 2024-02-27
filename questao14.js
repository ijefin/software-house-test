const calcularTotalEImposto = (valorUnitario, descontoPercentual, quantidadeComprada, impostoPercentual) => {
    // Calcular o valor total antes do desconto
    let valorTotalAntesDesconto = valorUnitario * quantidadeComprada;

    // Aplicar desconto
    let desconto = (descontoPercentual / 100) * valorTotalAntesDesconto;
    let valorTotalComDesconto = valorTotalAntesDesconto - desconto;

    // Calcular o valor do imposto
    let imposto = (impostoPercentual / 100) * valorTotalComDesconto;

    // Calcular o valor total final
    let valorTotalFinal = valorTotalComDesconto + imposto;

    // Retornar os resultados
    return {
        valorTotal: valorTotalFinal,
        valorImposto: imposto
    };
}

// Exemplo de uso
const resultado = calcularTotalEImposto(10.00, 5, 3, 8);
console.log(`Valor Total: R$${resultado.valorTotal.toFixed(2)}`);
console.log(`Valor do Imposto: R$${resultado.valorImposto.toFixed(2)}`);
