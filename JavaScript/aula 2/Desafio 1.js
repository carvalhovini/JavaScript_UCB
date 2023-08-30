const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + ' ';
        }
        console.log(linha);
    }
}

function calcularTransposta(matriz) {
    const numLinhas = matriz.length;
    const numColunas = matriz[0].length;

    const transposta = [];
    for (let i = 0; i < numColunas; i++) {
        transposta[i] = [];
    }

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numColunas; j++) {
            transposta[j][i] = matriz[i][j];
        }
    }
    
    return transposta;
}

console.log('Matriz A:');
imprimirMatriz(A);

const AT = calcularTransposta(A);
console.log('\nMatriz Transposta A^T:');
imprimirMatriz(AT);
