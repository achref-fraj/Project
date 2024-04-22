import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppFooter from './components/footer';
import Home from './Pages/Home';
import Carte from './components/carte';
import Connexion from './Pages/connexion';
import SignUp from './Pages/creaction';
import PaymentProcess from './Pages/Paiement';
import AppNavbar from './components/header';
import Cart from './Pages/Carte';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Paiement" element={<PaymentProcess />} />
        <Route path="/ca" element={<Cart/>}/>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
