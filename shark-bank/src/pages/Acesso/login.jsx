import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import Bateria from '../../assets/bateria.png'

export function PaginaLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const rememberKey = "rememberData"

  useEffect(() => {
    const storedData = localStorage.getItem("rememberData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCpf(parsedData.cpf);
      setPassword(parsedData.password);
      setRemember(true);
    }
  }, []);

  function handleCpfChange(e) {
    setCpf(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRememberChange(e) {
    setRemember(e.target.checked);
  }

  //essa parte é mto parecida com oq fizemos na task anterior
  //como ainda n tem o cadastro para ter algo armazenado no localStorage
  //então usei aquela estrutura ali em cima pra simular
  function handleAccess() {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (cpf === parsedData.cpf && password === parsedData.password) {
        alert("Login efetuado com sucesso!");
        if (remember) {
          localStorage.setItem(
            rememberKey,
            JSON.stringify({ cpf, password })
          );
        } else {
          localStorage.removeItem("userData");
        }
      } else {
        alert("CPF ou senha incorretos!");
      }
    } else {
      alert("Usuário não cadastrado!");
    }
  }

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />

      <div className="user">
        <h2>Acesso</h2>
      </div>

      
      <div className="campo">
        <fieldset id="fields-set">

          <div >
            <label>
              <p className='inputNome'>CPF:</p>
              <input className='input' type="text" value={cpf} onChange={handleCpfChange} />
            </label>
          </div>


          <br />
          <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label>
            <input type="checkbox" checked={remember} onChange={handleRememberChange} />
            Lembrar-me
          </label>
        
          <Link to="/esquecisenha">
            <a>Esqueci a senha</a>
          </Link>
        </fieldset>
        <br/>
        <Link to="/principal">
          <Button titulo="Acessar" onClick={handleAccess}/>
        </Link>
        
        {/* <button onClick={handleAccess}>Acessar</button> */}
      </div>
    </div>
  );
}
