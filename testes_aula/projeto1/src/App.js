// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import './App.css';

//Uma função que na verdade é um componente XD
function App() {

  // const nome = "João";

  return (
    <div className="App">
      {/* <h1>Teste de CSS</h1>
      <SayMyName nome="Carlos"/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="CLAUDIO"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <Frase/>
      <Frase/>
      <List/> */}

      <h1>Testando Elementos</h1>
      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form/>
    </div>
    
  );
}

export default App;
