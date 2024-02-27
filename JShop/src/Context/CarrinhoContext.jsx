import React, { createContext, useState, useContext } from 'react';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarProduto = (produto) => {
        setCarrinho((carrinhoAtual) => [...carrinhoAtual, produto]);
    };

    const removerProduto = (idCarrinho) => {
        setCarrinho((carrinhoAtual) => carrinhoAtual.filter((p) => p.idCarrinho !== idCarrinho));
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, produto) => total + produto.preco, 0);
    };

    const value = {
        carrinho,
        adicionarProduto,
        removerProduto,
        calcularTotal,
    };

    return <CarrinhoContext.Provider value={value}>{children}</CarrinhoContext.Provider>;
};

export const useCarrinho = () => useContext(CarrinhoContext);
