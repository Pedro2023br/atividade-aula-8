
## Exercício 1: Verificar Idade

### Código com JSDoc:
```javascript
/**
 * Verifica se a pessoa é maior ou menor de idade.
 *
 * @param {number} idade - A idade da pessoa.
 * @returns {string} Retorna "Menor de idade" se a idade for menor que 18, ou "Maior de idade" caso contrário.
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}

// Testes
console.log(verificarIdade(15)); // "Menor de idade"
console.log(verificarIdade(18)); // "Maior de idade"
console.log(verificarIdade(21)); // "Maior de idade"
```
---

## Exercício 2: Definir Dia da Semana

### Código com JSDoc:
```javascript
/**
 * Retorna o nome do dia da semana com base no número fornecido.
 *
 * @param {number} dia - Número do dia da semana (1 a 7).
 * @returns {string} O nome do dia correspondente ou "Número inválido" se o número estiver fora do intervalo.
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

// Testes
console.log(definirDiaDaSemana(3)); // "Terça-feira"
console.log(definirDiaDaSemana(7)); // "Sábado"
console.log(definirDiaDaSemana(8)); // "Número inválido"
```
---

## Exercício 3: Par ou Ímpar

### Código com JSDoc:
```javascript
/**
 * Verifica se um número é par ou ímpar.
 *
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Retorna "Par" se o número for par, ou "Ímpar" caso contrário.
 */
const parOuImpar = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";

// Testes
console.log(parOuImpar(10)); // "Par"
console.log(parOuImpar(15)); // "Ímpar"
console.log(parOuImpar(22)); // "Par"
```
---

## Exercício 4: Verificar Acesso ao Sistema

### Código com JSDoc:
```javascript
/**
 * Verifica se o usuário pode acessar o sistema com base nas condições de idade, administração e bloqueio.
 *
 * @param {Object} usuario - O objeto que contém as informações do usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna `true` se o usuário pode acessar o sistema, ou `false` caso contrário.
 */
const podeAcessar = ({ idade, isAdmin, isBlocked }) => (idade >= 18 || isAdmin) && !isBlocked;

// Testes
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // false
```
---

## Exercício 5: Calcular Desconto

### Código com JSDoc:
```javascript
/**
 * Calcula o preço final de um produto após aplicar o desconto.
 *
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} porcentagemDesconto - A porcentagem de desconto a ser aplicada.
 * @returns {number} O preço final após o desconto.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => 
    precoOriginal - (precoOriginal * porcentagemDesconto / 100);

// Testes
console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200
```
