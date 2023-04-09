import { useState } from "react";
import { ButtonRecuar } from '../../../components/Button/Recuar';
import { ButtonAvancar } from '../../../components/Button/Avancar';
import { Link } from 'react-router-dom';

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
      <Link to="/pix2">
         <ButtonRecuar/>
      </Link>
        

      <div className="user">
        <h1>Transferindo</h1>
        <p>R${localStorage.getItem("transferencia")}</p>
      </div>
      <div className="campo">
        <p>Para a chave/email/pix: {localStorage.getItem("pix2")}</p>
      </div>
      
      <Link to="/senha">
      <ButtonAvancar onClick={handleFeito}/>
      </Link>

    </div>
  );
}
