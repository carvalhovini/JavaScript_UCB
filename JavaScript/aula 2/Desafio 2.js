const A = [
    [1, 3],
    [2, 5]
];

const B = [
    [2, 2],
    [0, 1]
];

function multiplicacaoMatrizesPossivel(A, B) {
    const numColunasA = A[0].length;
    const numLinhasB = B.length;
    return numColunasA === numLinhasB;
}

function multiplicarMatrizes(A, B) {
    if (!multiplicacaoMatrizesPossivel(A, B)) {
        return "Não é possível calcular a multiplicação das matrizes.";
    }

    const numLinhasA = A.length;
    const numColunasA = A[0].length;
    const numColunasB = B[0].length;

    const C = new Array(numLinhasA);
    for (let i = 0; i < numLinhasA; i++) {
        C[i] = new Array(numColunasB).fill(0);
    }

    for (let i = 0; i < numLinhasA; i++) {
        for (let j = 0; j < numColunasB; j++) {
            for (let k = 0; k < numColunasA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

if (multiplicacaoMatrizesPossivel(A, B)) {
    const resultado = multiplicarMatrizes(A, B);
    console.log("Resultado da multiplicação das matrizes:");
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i].join(' '));
    }
} else {
    console.log("Não é possível calcular a multiplicação das matrizes.");
}
