import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ButtonPix } from "../../../components/Lobby/Pix";
import { ButtonTrans } from "../../../components/Lobby/Transferir";
import Bateria from '../../../assets/bateria.png'


export function Principal() {
  const [tabelaT, setTabelaT] = useState("");
  const [tabelaT2, setTabelaT2] = useState("");

  useEffect(() => {
    
    const tabelaTValue = localStorage.getItem("tabelaT");
    const tabelaT2Value = localStorage.getItem("tabelaT2");

    setTabelaT(tabelaTValue);
    setTabelaT2(tabelaT2Value);
  }, []);

  return (
    <div className="corpo">
      <img src={Bateria} alt="imagem da bateria do celular" />
      <div className="user">
        <h1>Histórico de Transferências</h1>
      </div>

        <div className="botao">
            <Link to="/pix">
                <ButtonPix className="botaopix"/>
            </Link>

            <Link to="/transferencia">
                <ButtonTrans className="botaotransferencia"/>
            </Link>
              
        </div>
      <fieldset id="fields-set">
      <div className="campo">
        <p> {tabelaT}</p>
        <p> {tabelaT2}</p>
      </div>
      </fieldset>
    </div>
  );
}
