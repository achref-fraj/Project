import React, { useState } from 'react';
import './Css/connexion.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Connexion= () => {
  const [forum, setForum] = useState({});
    const navigate = useNavigate()
  const handleState = (event, key) => {
    setForum({ ...forum, [key]: event.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
       await axios.post(process.env.REACT_APP_API_URL + "/users/signin",forum );
      navigate("/")
       // to do: navigate to the homepage 
    } catch (error) {
      console.log(error.response.data.statusCode);
      if (error.response.data.statusCode == 404) {
          alert(error.response.data.message)
    }
  }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        {/* Titre du formulaire */}
        <h1>Connexion</h1>
        {/* Champ de saisie de l'email */}
        <div className='input-group'>
          <input required type='text' name='email' autoComplete='off' className='input' onChange={(e) => handleState(e, "email")} />
          <label className='user-label'>Email Address</label>
        </div>
        {/* Champ de saisie du mot de passe */}
        <div className='input-group'>
          <input required type='password' name='password' autoComplete='off' className='input' onChange={(e) => handleState(e, "password")} />
          <label className='user-label'>Password</label>
        </div>
        {/* Bouton de soumission */}
        <button onClick={handleSubmit}>Connexion</button>
        {/* Lien vers la page d'inscription */}
        <p className='loginsignup-login'>Don't have an account ?<Link to={'/signup'}> <span>Sign Up here</span></Link></p>
        {/* Checkbox pour l'accord des termes et conditions */}
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
       
      </div>
       {/* Image illustrative */}
       <img src="https://pbs.twimg.com/media/GAlulF5a0AAMQkP?format=jpg&name=4096x4096" alt="Illustration" className="form-image" />
    </div>
  );
}

export default Connexion;
