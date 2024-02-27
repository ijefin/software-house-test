import React from 'react';
import { CarrinhoProvider } from './Context/CarrinhoContext';
import { ListaProdutos } from './components/ListaProdutos';
import { Carrinho } from './components/Carrinho';
const App = () => {
  return (
    <CarrinhoProvider>
      <div>
        <ListaProdutos />
        <Carrinho />
      </div>
    </CarrinhoProvider>
  );
};

export default App;