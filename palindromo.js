function verificaPalindromo(string) {
    if (!string) return 'String inexistente';
    let tamanho = string.length-1;
    for (let i = 0; i < tamanho/2; i++) {
        if (string[i] !== string[tamanho - i]) {
            return 'Não é palíndromo';
        };
    }
    return 'É palíndromo';
    }


function  verificaPalindromo2(string) {
    if (!string) return 'String inexistente';
    if (string.split('').reverse().join('') === string) {
        return 'É palíndromo';
    };
    return 'Não é palíndromo';
    }


function verificaPalindromo3(string) {
    if (!string) return 'String inexistente';
    normal = string.split(` `).join(``);
    invertido = normal.split(``).reverse().join(``);
    if (normal == invertido) {
            return 'É palíndromo';
        }
    return `Não é palindromo`;
    }

console.log (verificaPalindromo('aba'));
console.log (verificaPalindromo2('aba'));
console.log (verificaPalindromo3('aba'));
console.log (verificaPalindromo3(`aba a ba`));