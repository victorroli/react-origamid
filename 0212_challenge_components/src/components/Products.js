import React from 'react';
import Title from './Title';
import Product from './Product';

const Products = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
  ];

  return (
    <section>
      <Title texto="Produtos" />
      {produtos.map((item) => (
        <Product key={item.nome} {...item} />
      ))}
    </section>
  );
};

export default Products;
