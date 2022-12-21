// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],
  ativa: true
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' }
  ],
  ativa: false
};

const App = () => {
  const dados = luana;
  const sumCompras = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>
        <b>Nome: </b> {dados.cliente}
      </p>
      <p>
        <b>Idade: </b>
        {dados.idade}
      </p>
      <p>
        <b>Situação: </b>
        <span style={{ color: !dados.ativa ? 'red' : 'green ' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>
        <b>Total gasto: </b>
        R$ {sumCompras}
      </p>
      {sumCompras > 10000 ? <p>Você está gastando muito!</p> : ''}
    </div>
  );
};

export default App;
