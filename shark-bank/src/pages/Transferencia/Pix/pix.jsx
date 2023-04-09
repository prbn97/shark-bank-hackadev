import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Input } from '../../../components/Input';
import { Link } from 'react-router-dom';

export function Pix() {
  const [saldoConta, setSaldoConta] = useState(0);
  
  function InputChange(event) {
    const valor = event.target.value;
    const novoSaldo = valor.replace(/\D/g, '') / 100;
    setSaldoConta(novoSaldo);
    localStorage.setItem('transferencia', novoSaldo);
  }
  
  function formatarSaldo(saldo) {
    const saldoFormatado = saldo.toFixed(2).replace('.', ',');
    return `R$ ${saldoFormatado}`;
  }
  
  return (
    <div className="corpo">
      <div className='user'>
          
      </div>
      <Link to="/principal">
      <ButtonRecuar/>

      </Link>
      
        <br/>
      <div className='campo'>

        <h1>Qual é o valor do seu PIX?</h1>
        <p>Saldo disponível em conta:</p>
        {/* <p>{formatarSaldo(saldoConta)}</p> */}
        
        <input type="text" value={formatarSaldo(saldoConta)} onChange={InputChange} />
        <br/>
        <Link to="/pix2">
          <ButtonAvancar/>
        </Link>

      </div>
      
    </div>
    
  );
}


