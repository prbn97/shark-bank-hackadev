import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ButtonPix } from "../../../components/Lobby/Pix";
import { ButtonTrans } from "../../../components/Lobby/Transferir";


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
        <div className="botões">
            <Link to="/pix">
                <ButtonPix className="botão1"/>
            </Link>

            <Link to="/transferencia">
                <ButtonTrans className="botão2"/>
            </Link>
            
            
        </div>
      <div className="user">
        <h1>Histórico de Transferências</h1>
      </div>
      <div className="campo">
        <p> {tabelaT}</p>
        <p> {tabelaT2}</p>
      </div>
    </div>
  );
}
