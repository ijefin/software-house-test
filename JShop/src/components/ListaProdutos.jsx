import React from 'react'
import { useCarrinho } from '../Context/CarrinhoContext';

const produtos = [
    { id: 1, nome: 'Iphone 14', preco: 8799 },
    { id: 2, nome: 'RTX 3060', preco: 3699 },
    { id: 4, nome: 'XTZ 160 2018', preco: 16000 },
    { id: 5, nome: 'Monitor Samsung Odissey', preco: 2299 },
    { id: 6, nome: 'Teclado Gamer Hyperx Alloy Elite', preco: 400 },
    { id: 7, nome: 'Macbook Air M2', preco: 9999 },
    { id: 8, nome: 'PlayStation 5', preco: 4999 },
    { id: 9, nome: 'Smart TV LG 55"', preco: 2999 },
    { id: 10, nome: 'Cadeira Gamer DXRacer', preco: 1200 },
    { id: 11, nome: 'Google Pixel 6', preco: 799 },
    { id: 12, nome: 'Mouse Logitech G Pro', preco: 150 },
    { id: 13, nome: 'Kindle Paperwhite', preco: 499 },
    { id: 14, nome: 'Bicicleta Caloi Elite Carbon', preco: 6500 },
    { id: 15, nome: 'Fone de Ouvido Sony WH-1000XM4', preco: 1299 },
    { id: 16, nome: 'Aspirador de Pó Robô Roomba', preco: 899 },
    { id: 17, nome: 'Máquina de Café Nespresso', preco: 399 },
    { id: 18, nome: 'Impressora HP LaserJet', preco: 599 },
    { id: 19, nome: 'Panela Elétrica de Arroz', preco: 120 },
    { id: 20, nome: 'Relógio Smartwatch Garmin', preco: 349 },
];


export const ListaProdutos = () => {
    const { adicionarProduto } = useCarrinho();

    const adicionarProdutoComIdUnico = (produto) => {
        const produtoComIdUnico = {
            ...produto,
            idCarrinho: `${produto.id}-${Math.random().toString(36).substring(7)}`,
        };
        adicionarProduto(produtoComIdUnico);
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        {produto.nome} - R${produto.preco.toFixed(2)}{' '}
                        <button onClick={() => adicionarProdutoComIdUnico(produto)}>Adicionar ao Carrinho</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};