import React from 'react';

const Produtos = ({ dados }) => {
  return (
    <div className='produtosContainer'>
      <div className="produtosBox">
        {dados.map(produto => (
            <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <img src={produto.fotos[0]?.src} alt={produto.nome} />
            <p>{produto.descricao}</p>
            <p>Vendedor: {produto.usuario_id}</p>
            <strong>Preço: R$ {produto.preco}</strong>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
