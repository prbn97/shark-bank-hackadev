import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Input } from '../../../components/Input';
import { Link } from 'react-router-dom';
import '../../../styles/pages/Transferecia/globalTransferencia.css'
import Bateria from '../../../assets/bateria.png'



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
      <img src={Bateria} alt="" />
      <div className='user'>
          
      </div>
      <Link to="/principal">
      

      </Link>
      
        <br/>
      <div className='campo'>
        <fieldset id="fields-set">

          <ButtonRecuar/>
          <h1>Qual é o valor do seu PIX?</h1>
          <p>Saldo disponível em conta:</p>
          {/* <p>{formatarSaldo(saldoConta)}</p> */}
          
          
          <input className='input' type="text" value={formatarSaldo(saldoConta)} onChange={InputChange} />
          <br/>
                         
        
        </fieldset>

        <div className='botaoAvancar'>

            <Link to="/pix2">
            <ButtonAvancar/>
          </Link>
        </div>

      </div>
      
    </div>
    
  );
}


