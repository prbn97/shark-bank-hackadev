import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';

export function Pix2() {
  const [campoTexto, setCampoTexto] = useState('');

  function handleNext() {
    localStorage.setItem('pix2', campoTexto);
    console.log(localStorage.getItem('pix2')); // imprime o valor salvo no localStorage
  }

  return (
    <div className="corpo">
      <div className='user'>

      </div>
      <div className='campo'>
      <Link to="/pix1">
      <ButtonRecuar/>
      </Link>
      
        <br/>
        <h1>Para quem você quer transferir esse valor?</h1>
        <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
        
        <input type="text" value={campoTexto} onChange={(event) => setCampoTexto(event.target.value)} />
        <br/>    
        <Link to="/pix3">
          <ButtonAvancar onClick={handleNext} />
        </Link>
        
        
      </div>
    </div>
  );
}
