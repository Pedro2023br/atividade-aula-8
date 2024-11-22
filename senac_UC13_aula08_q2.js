/**
 * Retorna o nome do dia da semana correspondente ao número fornecido.
 *
 * @param {number} dia - Um número entre 1 e 7 representando os dias da semana.
 * @returns {string} O nome do dia da semana, ou "Número inválido" se o valor for fora do intervalo.
 */
function definirDiaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

// Testando a função com os valores 3, 7 e 8
console.log(definirDiaDaSemana(3)); // Saída: "Terça-feira"
console.log(definirDiaDaSemana(7)); // Saída: "Sábado"
console.log(definirDiaDaSemana(8)); // Saída: "Número inválido"
