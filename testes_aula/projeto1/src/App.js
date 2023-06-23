import './App.css';
import OutraLista from './components/OutraLista';

//Uma função que na verdade é um componente XD
function App() {

  const meusItens = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">

      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={{}}/>
    </div>
    
  );
}

export default App;
