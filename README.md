
# Exercícios Resolvidos - Aula 08

Este repositório contém a resolução dos exercícios propostos na aula 08. Cada questão é explicada com seu enunciado, abordagem de solução e código implementado utilizando o padrão JSDoc para documentar as funções.

---

## Exercício 1: Verificar Idade

### Enunciado:
Escreva uma função chamada `verificarIdade` que recebe a idade de uma pessoa como parâmetro e retorna:
- `"Menor de idade"` se a idade for menor que 18.
- `"Maior de idade"` se a idade for 18 ou mais.

Teste a função com os valores `15`, `18` e `21`.

### Solução:
A função usa uma estrutura condicional `if-else` para verificar a idade fornecida e retornar a categoria correspondente.

#### Código com JSDoc:
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

### Enunciado:
Crie uma função chamada `definirDiaDaSemana` que recebe um número (1 a 7) representando os dias da semana e retorna:
- `"Domingo"` para 1,
- `"Segunda-feira"` para 2, e assim por diante até `"Sábado"` para 7.

Caso o número seja inválido, retorne `"Número inválido"`. Teste com os valores `3`, `7` e `8`.

### Solução:
A função usa uma estrutura `switch` para mapear os números aos dias da semana e um caso padrão para entradas inválidas.

#### Código com JSDoc:
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

### Enunciado:
Implemente uma função chamada `parOuImpar` que utiliza um operador ternário para verificar se um número é:
- `"Par"` se divisível por 2.
- `"Ímpar"` caso contrário.

Teste com os valores `10`, `15` e `22`.

### Solução:
A função usa o operador ternário para realizar a verificação de forma concisa.

#### Código com JSDoc:
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

### Enunciado:
Implemente a função `podeAcessar` que verifica se um usuário pode acessar o sistema com base nas regras:
1. O usuário deve ser maior de 18 anos **ou** administrador.
2. A conta do usuário não pode estar bloqueada.

A função recebe um objeto com as propriedades: `idade`, `isAdmin` e `isBlocked`.

### Solução:
A lógica combina operadores lógicos `||` e `&&` para verificar as condições de acesso.

#### Código com JSDoc:
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

### Enunciado:
Crie uma arrow function chamada `calcularDesconto` que recebe dois argumentos:
1. O preço original de um produto.
2. A porcentagem de desconto.

A função deve retornar o preço final com o desconto aplicado. Teste com os valores:
- Preço: `100`, Desconto: `10` (retorna `90`).
- Preço: `250`, Desconto: `20` (retorna `200`).

### Solução:
A função calcula o desconto aplicando a fórmula:  
`precoFinal = precoOriginal - (precoOriginal * porcentagemDesconto / 100)`.

#### Código com JSDoc:
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
---

## Conclusão

As funções implementadas demonstram como resolver problemas básicos de lógica e manipulação de dados em JavaScript. Cada exercício foi documentado com o propósito, abordagem e testes, garantindo a clareza para quem consulta este repositório.
