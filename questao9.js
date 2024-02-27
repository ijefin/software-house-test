const livros = [
    { titulo: "Javascript: The Good Parts", autor: "Douglas Crockford", ano: 2008 },
    { titulo: "Eloquent Javascript", autor: "Marijn Havebeke", ano: 2011 },
    { titulo: "You Dont't Know JS", autor: "Kyle Simpson", ano: 2014 }
];


/**
 * @param {Array} livros - um array de objetos 
 * A. Escreva uma função chamada “formatarLivro” que receba um objeto livro e retorne
 * uma string no formato “Título, escrito por Autor (Ano)”. 
 */
const formatarLivro = (livro) => {
    return livro.map((livro) => {
        return `${livro.titulo}, escrito por ${livro.autor} (${livro.ano}).`;
    }).join('\n');
}

const descricaoLivros = formatarLivro(livros);
console.log(descricaoLivros);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const numeros2 = [10, 20, 33, 45, 58, 60]

/**
 * @param arrayDeNumeros uma lista contendo apenas números.
 * B. Dada a seguinte lista de números, crie uma função que retorne todos os números, com 
 * todos os valores pares dobrados:
 */
const dobrarNumerosPares = (arrayDeNumeros) => {
    if (!Array.isArray(arrayDeNumeros)) {
        return "Por favor, forneça uma lista de números.";
    }

    //verifica se o número é par para realizar a multiplicação por 2
    return arrayDeNumeros.map((numero) => {
        if (numero % 2 === 0) {
            return numero * 2
        }
        return numero
    })
}

const numerosDobrados = dobrarNumerosPares(numeros)
console.log(numerosDobrados)


const nomes = ["Jefferson", "Pedro", "Pedro", "Carlos", "Guilherme", "Jefferson"]

/**
 * @param array uma lista contendo nomes no tipo String
 * C. Dado o seguinte array de nomes, retorne um novo array sem que os valores estejam
 * duplicados
 */
const removeDuplicatas = (array) => {
    const novaLista = array.filter((nomes, indice) => array.indexOf(nomes) === indice)
    return novaLista
}

const resultado = removeDuplicatas(nomes)
console.log(resultado)
