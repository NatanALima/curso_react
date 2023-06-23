import { useState } from "react"
import './App.css';
//import StreamContent from './components/Stream/StreamContent';
import Produtos from './components/produtos/Produtos';

function App() {
  
  const [produtos, setProdutos] = useState([]);

  const insertProdutos = (prods) => {
    setProdutos(prevProds => [...prevProds, prods]);

  }

  const [listBoxProd, setListBoxProd] = useState([<Produtos key={0} insertProdutos={insertProdutos}/>]);

  const addBoxList = () => {
    
    if(listBoxProd.length < 6) {
      setListBoxProd(listBoxProd.concat([<Produtos key={listBoxProd.length} insertProdutos={insertProdutos}/>]));
    } 
    
  }

  const delBoxList = () => {
    if(listBoxProd.length > 1) {
      setListBoxProd(prevListBoxProd => prevListBoxProd.slice(0, -1));
    }
  }


  return (
    <main>
      <h1>Informações de Produtos</h1>
      <p className="infoProd">Lista dos Produtos: {produtos}</p>
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
