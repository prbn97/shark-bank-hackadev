import { useState, useEffect } from "react";

export function PaginaLogin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // isso aqui só pra simular o localStorage mesmo
  const userData = {
    cpf: "123",
    password: "123",
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
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
            "userData",
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
    <div>
      <h2>Acesso</h2>
      <label>
        CPF:
        <input type="text" value={cpf} onChange={handleCpfChange} />
      </label>
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
    
      {/* como ainda não tô sabendo mexer com rotas, 
      por hora é isso*/}
      <a>Esqueci a senha</a>
      <br/>
      <button onClick={handleAccess}>Acessar</button>
    </div>
  );
}
