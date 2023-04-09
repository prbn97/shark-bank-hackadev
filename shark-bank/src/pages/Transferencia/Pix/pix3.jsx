import { useState } from "react";
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';
import Bateria from '../../../assets/bateria.png'

export function Pix3() {
  const [tabelaT, setTabelaT] = useState([]);

  function handleFeito() {
    const transferencia = localStorage.getItem("transferencia") || 0;
    const pix2 = localStorage.getItem("pix2") || "";

    const registro = {
      transferencia,
      pix2,
      data: new Date().toISOString(),
    };

    const novaTabelaT = [...tabelaT, registro];
    setTabelaT(novaTabelaT);
    localStorage.setItem("tabelaT", JSON.stringify(novaTabelaT));
  }

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />
      <div className="campo">
        <fieldset id="fields-set">
          <Link to="/pix2">
            <ButtonRecuar/>
          </Link>
            

          <div className="user">
            <h1>Transferindo</h1>
            <h2>R${localStorage.getItem("transferencia")}</h2>
            <h2>Para a chave/email/pix: {localStorage.getItem("pix2")}</h2>
          </div>
          
          

          <div className='botaoAvancar'>
            <Link to="/senha">
            <ButtonAvancar onClick={handleFeito}/>
            </Link>

          </div>
          
        
        </fieldset>

      </div>

     
      

    </div>
  );
}
