import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import store from './store/store';
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Addproduct from './pages/addproduct';
import Productlist from './pages/productlist';
function App() {

  const state = useSelector(store => store);

  console.log(state)


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='product' element={<Outlet/>}>
            <Route path='list' element={<Productlist />} />
            <Route path='add' element={<Addproduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
