import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductForm from './Pages/ProductForm';
import ProductTable from './Pages/ProductTable';
import Class from './Class';
import ClassComponent from './ClassComponent';
import Product from './ClassComponent/Product';
import Productlist from './ClassComponent/Productlist';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/form' element={<ProductForm />}></Route>
      <Route path='/list' element={<ProductTable />}></Route>
      <Route path='/class' element={<Class />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      <Route path='/productlist' element={<Productlist />}></Route>
      {/* <Route path='/component' element={<ClassComponent />}></Route> */}
      <Route path='/form/:id' element={<ProductForm />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;