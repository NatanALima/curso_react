import { useEffect, useState, useRef} from "react"
import './App.css';
//import StreamContent from './components/Stream/StreamContent';
import Produtos from './components/produtos/Produtos';

function App() {
  
  const [produtos, setProdutos] = useState([]);

  //Este Ref pegará todos os botões referentes ao formulário de produtos no componente filho ("Produtos") para que, quando o botão "Finalizar Compra" presente no "APP" (aqui) exerça a função de todos os botões do componente filho, cadastrando todas as informações dos produtos presentes em cada formulário;
  const insertClickRef = useRef([]);


  const [numBoxProd, setnumBoxProd] = useState([0]);

  const addBoxList = () => {
    
    if(numBoxProd.length < 6) {
      setnumBoxProd(prevNumBox => [...prevNumBox, numBoxProd[numBoxProd.length -1] + 1]);
      // setListBoxProd(listBoxProd.concat([<Produtos key={listBoxProd.length} insertProdutos={setProdutos} sendRequest={sendRequest ? sendRequest : false}/>]));
    } 
    
  }

  const delBoxList = () => {
    if(numBoxProd.length > 1) {
      setnumBoxProd(prevNumBox => prevNumBox.slice(0, -1));
      
    }
  }

  const handleSetRequest = () => {
    insertClickRef.current.map(btn => btn.click());
    console.log(insertClickRef.current);

  }

  useEffect(() => {
    let valueRef = insertClickRef.current;
    valueRef = valueRef.filter(el => el !== null);
    insertClickRef.current = valueRef;

  });



  return (
    <main>
      <h1>Informações de Produtos</h1>
      <p className="infoProd">Lista dos Produtos: {JSON.stringify(produtos)}</p>
      <div className="prodContainer">
        {numBoxProd.map(boxProd => {
          return <Produtos key={boxProd} setProdutos={setProdutos} insertClickRef={insertClickRef} indexValue={boxProd}/>
        })}
      </div>
      <div className="mainBtn">
        <button onClick={addBoxList}>Adicionar </button>
        <button onClick={delBoxList}>Remover</button>
        <button onClick={handleSetRequest}>Finalizar Compra</button>
      </div> 
    </main>
  );
}

export default App;
