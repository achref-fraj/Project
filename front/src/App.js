
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Chat from './components/chatbot/chat';
import AppFooter from './components/footer';
import AppHeader from './components/header';
import Home from './Pages/Home';
import Carte from './components/carte';
import Connexion from './Pages/connexion';
import SignUp from './Pages/creaction';
import Panier from './Pages/panier';
import PaymentProcess from './Pages/Paiement';






function App() {
  return (
    <div className="App">

<BrowserRouter>
<     AppHeader/> 
      <Routes>  
        <Route path='/'element={<Home/>}/>
        <Route path='/Carte'element={<Carte/>}/>
        <Route path='/login'element={<Connexion/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Paiement' element={<PaymentProcess/>}/>
        <Route path='/pay' element={<Panier/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
      <Chat/>
      <AppFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
