import Evento from './components/Evento';
import Form from './components/Form';
import './App.css';

//Uma função que na verdade é um componente XD
function App() {

  // const nome = "João";

  return (
    <div className="App">

      <h1>Testando Elementos</h1>
      <Evento numero={1}/>
      <Form/>
    </div>
    
  );
}

export default App;
