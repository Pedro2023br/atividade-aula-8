/**
 * Verifica se um usuário pode acessar o sistema.
 *
 * @param {Object} usuario - Objeto representando o usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Indica se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna true se o acesso for permitido, ou false caso contrário.
 */
function podeAcessar({ idade, isAdmin, isBlocked }) {
    return (idade >= 18 || isAdmin) && !isBlocked;
}

// Testando a função com os exemplos fornecidos
console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // false
