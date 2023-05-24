import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';
import PolmanRevolution from './Components/PolmanRevolution';
import About from './Components/About';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
import CareerDetails from './Components/Careers/CareerDetails';
import CareerDetails1 from './Components/Careers/CareerDetails1';
import ProductDetails from './Components/Products/ProductDetails';
import Footer from './Components/Footer';
import CareerApply from './Components/Careers/CareerApply';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/PolmanRevolution' element={<PolmanRevolution />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Careers' element={<Careers />} />
        <Route path='/CareerDetails' element={<CareerDetails />} />
        <Route path='/CareerDetails1' element={<CareerDetails1 />} />
        <Route path='/ProductDetails' element={<ProductDetails />} />  
        <Route path='/CareerApply' element={<CareerApply />} />  


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;