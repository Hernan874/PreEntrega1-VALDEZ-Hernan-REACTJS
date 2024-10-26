import './App.css'
import ItemListContainer from './components/ItemListConteiner';
import Navbar from './components/navBar';



function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a PLANTOR!"/>
    </>
  );
}

export default App
