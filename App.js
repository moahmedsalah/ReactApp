
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Components/Content';
import Navbar from './Components/NavBar';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Information from './Pages/Information';
import Services from './Pages/Services';







function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <div className="row">
        <div className='col-2'>
          <Content />
          </div>
        <div className='col-10'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<Information />} />
            <Route path='/about' element={<Services />} />
          </Routes>
          </div>
      </div>
      </>
    </div>
  );
}

export default App;
