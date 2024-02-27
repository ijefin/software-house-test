import React from 'react';
import { useCarrinho } from '../Context/CarrinhoContext';

export const Carrinho = () => {
    const { carrinho, removerProduto, calcularTotal } = useCarrinho();

    return (
        <div>
            <h2>Carrinho de Compras</h2>
            <ul>
                {carrinho.map((produto) => (
                    <li key={produto.idCarrinho}>
                        {produto.nome} - R${produto.preco.toFixed(2)}{' '}
                        <button onClick={() => removerProduto(produto.idCarrinho)}>Remover</button>
                    </li>
                ))}
            </ul>
            <p>Total: R${calcularTotal().toFixed(2)}</p>
        </div>
    );
};
