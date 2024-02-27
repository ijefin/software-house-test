const empresas = [
    { nome: "Samsung", valorDeMercado: 50, CEO: "Kim Hyum Suk", anoDeCriacao: 1938 },
    { nome: "Microsoft", valorDeMercado: 415, CEO: "Satya Nadella", anoDeCriacao: 1975 },
    { nome: "Intel", valorDeMercado: 117, CEO: "Briar Krzanich", anoDeCriacao: 1968 },
    { nome: "Facebook", valorDeMercado: 338, CEO: "Mark Zuckerberg", anoDeCriacao: 2004 },
    { nome: "Spotify", valorDeMercado: 30, CEO: "Daniel Ek", anoDeCriacao: 2006 },
    { nome: "Apple", valorDeMercado: 845, CEO: "Tim Cook", anoDeCriacao: 1976 }
]

//Faça com que seja formada pelo menos uma frase, utilizando todas as propriedades de um objetos k:v
const descricaoCompleta = empresas.map((empresa) => {
    console.log(`A ${empresa.nome} foi fundada por ${empresa.CEO}, no ano de ${empresa.anoDeCriacao}.\n`)
})

//Retorne o valor de mercado somado de todas as empresas.
const somaTotal = empresas.map((valorEmpresas) => valorEmpresas.valorDeMercado).reduce((prev, curr) => prev + curr, 0)
console.log(`A soma total do valor de mercado de todas as empresas é de ${somaTotal}Bi.`)

const fundadasPos2000 = empresas.filter((empresa) => empresa.anoDeCriacao > 2000).map((empresa) => {
    console.log(`A empresa ${empresa.nome} foi fundada em ${empresa.anoDeCriacao}.`)
})