/**
 * Calcula o preço final de um produto após aplicar o desconto.
 *
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço final após o desconto.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => 
    precoOriginal - (precoOriginal * porcentagemDesconto / 100);

// Testando a função com os valores fornecidos
console.log(calcularDesconto(100, 10)); // Saída: 90
console.log(calcularDesconto(250, 20)); // Saída: 200











































