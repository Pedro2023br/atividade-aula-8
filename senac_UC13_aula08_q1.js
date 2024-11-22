/**
 * Verifica a categoria de idade de uma pessoa.
 *
 * @param {number} idade - A idade da pessoa.
 * @returns {string} Uma string indicando se a pessoa é "Menor de idade" ou "Maior de idade".
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Testando a função com os valores 15, 18 e 21
console.log(verificarIdade(15)); // Saída: "Menor de idade"
console.log(verificarIdade(18)); // Saída: "Maior de idade"
console.log(verificarIdade(21)); // Saída: "Maior de idade"
