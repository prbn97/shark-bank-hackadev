import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Registro() {
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleUfChange = (event) => {
    setUf(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const handleComplementoChange = (event) => {
    setComplemento(event.target.value);
  };

  const handleBairroChange = (event) => {
    setBairro(event.target.value);
  };

  const handleRegistrarClick = () => {
    const registro = {
      cep: cep,
      uf: uf,
      endereco: endereco,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
    };
    localStorage.setItem("registro", JSON.stringify(registro));
  };

  return (
    <div className="corpo">
      <div className="user">
        <h1>Registro</h1>
      </div>
      <div className="campo">
        <label>
          CEP:
          <input type="text" value={cep} onChange={handleCepChange} />
        </label>
        
        <label>
          UF:
          <input type="text" value={uf} onChange={handleUfChange} />
        </label>
        <br/>
        <label>
          Endereço:
          <input type="text" value={endereco} onChange={handleEnderecoChange} />
        </label>
        
        <label>
          Número:
          <input type="text" value={numero} onChange={handleNumeroChange} />
        </label>
        <br/>
        <label>
          Complemento:
          <input type="text" value={complemento} onChange={handleComplementoChange} />
        </label>
        <br/>
        <label>
          Bairro:
          <input type="text" value={bairro} onChange={handleBairroChange} />
        </label>
      </div>
      <Link to="/login">
          <button onClick={handleRegistrarClick}>Registrar</button>
      </Link>
      
    </div>
  );
}
