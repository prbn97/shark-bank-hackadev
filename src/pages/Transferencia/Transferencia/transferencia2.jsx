import React, { useState } from 'react';
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';
import Bateria from '../../../assets/bateria.png'

export function Transferencia2() {
  const [campoBanco, setCampoBanco] = useState('');
  const [campoAgencia, setCampoAgencia] = useState('');
  const [campoConta, setCampoConta] = useState('');
  const [campoCPF, setCampoCPF] = useState('');
  const [campoCodigo, setCampoCodigo] = useState('');
  

  function handleAvancarClick() {
    localStorage.setItem('transferencia2', JSON.stringify({
      banco: campoBanco,
      agencia: campoAgencia,
      conta: campoConta,
      cpfdestino: campoCPF,
      codigo: campoCodigo
    }));
  }
  
  return (
    <div className="corpo">
      <img src={Bateria} alt="imagem da bateria do celular" />

      <div className='campo'>

        <fieldset id="fields-set">
                      
            <br/>
          

          <Link to="/transferencia">
          <ButtonRecuar/>  
          </Link>


            <h1>Para quem você quer transferir esse valor?</h1>
            <br />
            <p>Encontre um contato na sua lista ou inicia uma nova transferência:</p>
            
            

            <div>
              <p className='inputNome'>CPF/CNPJ</p>
              <input className='input' type="text" value={campoCPF} onChange={(event) => setCampoCPF(event.target.value)} />
            </div>

            <div className='codigoInstituicao'>
              <div>
                <p className='inputNome'> Código </p>
                <input className='inputReduzido01' type="text" value={campoCodigo} onChange={(event) => setCampoCodigo(event.target.value)} />
              </div>
              
              <div>
                <p className='inputNome'>Instituição</p>
                <input className='inputReduzido02' type="text" value={campoBanco} onChange={(event) => setCampoBanco(event.target.value)} />
              </div>
            </div>

            <div className='codigoInstituicao'>
              <div>
                <p className='inputNome'> Agência </p>
                <input className='inputReduzido03' type="text" value={campoAgencia} onChange={(event) => setCampoAgencia(event.target.value)} />
              </div>
              
              <div>
                <p className='inputNome'>CC</p>
                <input className='inputReduzido03' type="text" value={campoConta} onChange={(event) => setCampoConta(event.target.value)} />
              </div>
            </div>

            
            
            <br/>

            <div className='botaoAvancar'>
            <Link to="/transferencia3">
            <ButtonAvancar onClick={handleAvancarClick}/>  
            </Link>


        </div>

           
          
        </fieldset>


      </div>
    </div>
  );
}
