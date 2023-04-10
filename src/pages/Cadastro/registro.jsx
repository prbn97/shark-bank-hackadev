import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Bateria from '../../assets/bateria.png'
import '../../styles/pages/Cadastro/Cadastro.css'

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
    <div className="corpoCadastro">
      <img src={Bateria} alt="imagem da bateria do celular" />
      <div className="textoCadastro">
        <h1>Registro</h1>
      </div>
      <div className="campoCadastro">
        <label>
          CEP:
          <Input type="text" value={cep} onChange={handleCepChange} />
        </label>
        
        <label>
          UF:
          <Input type="text" value={uf} onChange={handleUfChange} />
        </label>
        <br/>
        <label>
          Endereço:
          <Input type="text" value={endereco} onChange={handleEnderecoChange} />
        </label>
        
        <label>
          Número:
          <Input type="text" value={numero} onChange={handleNumeroChange} />
        </label>
        <br/>
        <label>
          Complemento:
          <Input type="text" value={complemento} onChange={handleComplementoChange} />
        </label>
        <br/>
        <label>
          Bairro:
          <Input type="text" value={bairro} onChange={handleBairroChange} />
        </label>

        <div className="buttonsCadastro">
        <Link to="/login">
          <Button onClick={handleRegistrarClick} titulo="Registrar"/>
        </Link>
        </div>
      </div>
      
      
    </div>
  );
}
