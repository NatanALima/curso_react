import { useState } from "react"
import './App.css';
//import StreamContent from './components/Stream/StreamContent';
import Produtos from './components/produtos/Produtos';

function App() {
  
  const [produtos, setProdutos] = useState([]);
  const [isSend, setIsSend] = useState(false);

  // const insertProdutos = (prods) => {
  //   //console.log(prods);
  //   setProdutos(produtos.concat(prods));
  //   console.log(produtos);

  // }

  const [listBoxProd, setListBoxProd] = useState([<Produtos key={0} insertProdutos={setProdutos
  } test="hello"/>]);

  const addBoxList = () => {
    
    if(listBoxProd.length < 6) {
      setListBoxProd(listBoxProd.concat([<Produtos key={listBoxProd.length} insertProdutos={setProdutos} test="oi"/>]));
    } 
    
  }

  const delBoxList = () => {
    if(listBoxProd.length > 1) {
      setListBoxProd(prevListBoxProd => prevListBoxProd.slice(0, -1));
    }
  }

  listBoxProd.map(boxProd => console.log(boxProd));

  return (
    <main>
      <h1>Informações de Produtos</h1>
      <p className="infoProd">Lista dos Produtos: {JSON.stringify(produtos)}</p>
      <div className="prodContainer">
        {listBoxProd.map(boxProd => boxProd)}
      </div>
      <div className="mainBtn">
        <button onClick={addBoxList}>Adicionar </button>
        <button onClick={delBoxList}>Remover</button>
      </div> 
    </main>
  );
}

export default App;
