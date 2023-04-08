import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';

export function Pix2() {
  const [campoTexto, setCampoTexto] = useState('');

  return (
    <div className="corpo">
      <div className='user'>

      </div>
      <div className='campo'>
      <ButtonRecuar/>
      
        <br/>
        <h1>Para quem você quer transferir esse valor?</h1>
        <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
        
        <input type="text" value={campoTexto} onChange={(event) => setCampoTexto(event.target.value)} />
        <br/>     
        <ButtonAvancar/>
        
      </div>
    </div>
  );
}
