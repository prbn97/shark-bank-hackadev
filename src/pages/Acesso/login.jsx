import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import Bateria from '../../assets/bateria.png'
import '../../styles/pages/Acesso/Acesso.css'

export function PaginaLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const rememberKey = "rememberData"
  // const history = useHistory();

  useEffect(() => {
    const storedData = localStorage.getItem("rememberData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCpf(parsedData.cpf);
      setPassword(parsedData.password);
      setRemember(false);
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
          // localStorage.removeItem("userData");
        }
      // history.push("/principal");
      } else {
        alert("CPF ou senha incorretos!");
      }
    } else {
      alert("Usuário não cadastrado!");
    }
  }

  return (
    <div className="corpoAcesso">

      <div className="bateria">
        <img src={Bateria} alt="imagem da bateria do celular" />

      </div>
     
      <div className="textoAcesso">
        <h2>Acesso</h2>
      </div>

      <div className="campoAcesso">
        <fieldset className ="fields-set-acesso">

          <div >
            <label>
              <p className='inputNome'>CPF:</p>
              <input className='input' type="text" value={cpf} onChange={handleCpfChange} />
            </label>
          </div>


          
          <label>
            <p className='inputNome'>Senha:</p>
           
            <input className='input' type="password" value={password} onChange={handlePasswordChange} />
          </label>
          
          <div className="esqueciASenha">

            <div className="LembremeChackBox">
              <input className="inputCheckBox" type="checkbox" checked={remember} onChange={handleRememberChange} />
              <p className="textoPequeno">Lembrar-me</p>
            </div>
            
              
                                  
            <Link to="/esquecisenha">
              <a className="link">Esqueci a senha</a>
            </Link>

          </div>
        </fieldset>
        <br/>


        <Link to="/principal">
          <Button onClick={handleAccess} titulo="Acessar" />
        </Link>
        
        {/* <button onClick={handleAccess}>Acessar</button> */}
      </div>
    </div>
  );
}
