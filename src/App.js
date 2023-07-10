import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Inicio from './Inicio';
import ReturnPage from './ReturnPage';


function App() {
  
  return (
    <div>
      <Navbar />
      <div className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/retorno-pago' element={<ReturnPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
