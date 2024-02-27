const multiploDeTres = (num) => {
    if (typeof num !== 'number' || isNaN(num)) {
        console.log('\x1b[31mPor favor, forneça um número válido!\x1b[0m');
        return;
    }

    const result = num % 3 === 0 ? `\x1b[32m${num} é Múltiplo de 3!\x1b[0m` : `\x1b[31m${num} NÃO é Múltiplo de 3!\x1b[0m`;
    console.log(result);
    return result;
}

multiploDeTres("Não sou um número"); // Teste com um valor não numérico
multiploDeTres(2);
multiploDeTres(23);
multiploDeTres(5);
multiploDeTres(15);
multiploDeTres(24);
multiploDeTres(27);
multiploDeTres(30);

