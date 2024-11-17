import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailConteiner';
import Navbar from './components/navBar';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
