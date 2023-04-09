import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';
import Bateria from '../../../assets/bateria.png'

export function Transferencia3() {
  const [tabelaT2, setTabelaT2] = useState([]);
  const valorCampo = JSON.parse(localStorage.getItem("transferencia2"));

  function funcionaDiabo() {
    const transferencia = localStorage.getItem('transferencia2') || 0;
    const [banco, agencia, conta] = transferencia.split(';');
    
    const novoRegistro = {
      banco,
      agencia,
      conta,
      data: new Date().toLocaleString(),
    };

    setTabelaT2([...tabelaT2, novoRegistro]);
    localStorage.setItem('tabelaT2', JSON.stringify([...tabelaT2, novoRegistro]));
  }

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />


      <div className="campo">
        <fieldset id="fields-set">


          <Link to="/transferencia2">
          <ButtonRecuar/>

          </Link>

          <div className="user">
            <h1>Transferindo</h1>
            <p>R$ {localStorage.getItem('transferencia')}</p>
          </div>
            
          <p>Banco: {valorCampo.banco}</p>
          <p>Agência: {valorCampo.agencia}</p>
          <p>Conta: {valorCampo.conta}</p>
          
          <div className='botaoAvancar'>
            <Link to="/senha">
            <ButtonAvancar onClick={funcionaDiabo}/>
            </Link>
          </div>

        </fieldset>

      </div>

    </div>
  );
}
