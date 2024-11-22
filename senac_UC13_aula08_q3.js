/**
 * Verifica se um número é par ou ímpar.
 *
 * @param {number} numero - O número a ser verificado.
 * @returns {string} "Par" se o número for par, ou "Ímpar" caso contrário.
 */
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Testando a função com os números 10, 15 e 22
console.log(parOuImpar(10)); // Saída: "Par"
console.log(parOuImpar(15)); // Saída: "Ímpar"
console.log(parOuImpar(22)); // Saída: "Par"
