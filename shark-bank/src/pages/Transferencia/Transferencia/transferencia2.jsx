import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';

export function Transferencia2() {
  const [campoBanco, setCampoBanco] = useState('');
  const [campoAgencia, setCampoAgencia] = useState('');
  const [campoConta, setCampoConta] = useState('');

  function handleAvancarClick() {
    localStorage.setItem('transferencia2', JSON.stringify({
      banco: campoBanco,
      agencia: campoAgencia,
      conta: campoConta,
    }));
  }
  
  return (
    <div className="corpo">
      <Link to="/transferencia1">
      <ButtonRecuar/>  
      </Link>
          
        <br/>
       <div className='campo'>
        <h1>Para quem você quer transferir esse valor?</h1>
        <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
        <span>Banco</span>
        <span>Agência</span> 
        <span>Conta</span>
        <br/>
        <input type="text" value={campoBanco} onChange={(event) => setCampoBanco(event.target.value)} />
        <input type="text" value={campoAgencia} onChange={(event) => setCampoAgencia(event.target.value)} />
        <input type="text" value={campoConta} onChange={(event) => setCampoConta(event.target.value)} />
        <br/>

        <Link to="/transferencia3">
        <ButtonAvancar onClick={handleAvancarClick}/>  
        </Link>

      </div> 
    </div>
  );
}
