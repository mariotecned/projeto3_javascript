function pares(vetor) {
    if (vetor.length > 0) {   
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0 && vetor[i] != 0) {
            vetor[i] = 0;
        }
    }
    } else {
        return -1;
    }
    return vetor;
}

function pares2(vetor) {
    if (!vetor || !vetor.length) return -1;
    if (!vetor.length) return -1;

    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] === `number`) {
            if (vetor[i] === 0) {
                console.log (`Você já é zero`);
            } else if (vetor[i] % 2 === 0) {
                console.log (`Substituindo ${vetor[i]} por 0`);
                vetor[i] = 0;
            }
        } else {
        console.log (`${vetor[i]} não é número`)
        }
    }
    return vetor;
}

console.log (pares ([1, 3, 4, 0, 80, 33, 23, 90]));
console.log (pares ([]));
console.log (pares2 ([1, 3, 4, 0, 80, 33, 23, 90]));
console.log (pares2 ([]));
console.log (pares2 (null));
console.log (pares2 ([1 , 2, 0, `a`, `b`]));
