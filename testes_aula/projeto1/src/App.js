import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Footer from './components/layout/Footer';

//Uma função que na verdade é um componente XD
function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='empresa' element={<Empresa/>}/>
        <Route path='contato' element={<Contato/>}/>     
        
      </Routes>
      <Footer/>
    </Router>
    
  );

}

export default App;
