import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';
import '../../../styles/pages/Transferecia/globalTransferencia.css'
import Bateria from '../../../assets/bateria.png'

export function Pix2() {
  const [campoTexto, setCampoTexto] = useState('');

  function handleNext() {
    localStorage.setItem('pix2', campoTexto);
    console.log(localStorage.getItem('pix2')); // imprime o valor salvo no localStorage
  }

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />
      <div className='user'>

      </div>
      <div className='campo'>

        <fieldset id="fields-set">


        
          <Link to="/pix1">
          <ButtonRecuar/>
          </Link>
        
          <br/>
          <h1>Para quem você quer transferir esse valor?</h1>
          <br />
          <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
          
          <input className='input' type="text" value={campoTexto} onChange={(event) => setCampoTexto(event.target.value)} />
          <br/> 
          </fieldset>  

          <div className='botaoAvancar'>
          <Link to="/pix3">
            <ButtonAvancar onClick={handleNext} />
          </Link>            
          </div> 

          
        
        
      </div>
    </div>
  );
}
