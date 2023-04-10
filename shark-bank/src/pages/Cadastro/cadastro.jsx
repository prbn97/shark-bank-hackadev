import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";

export function Cadastro() {
  const [cpf, setCpf] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [liOsTermos, setLiOsTermos] = useState(false);

  const handleCadastro = () => {
    // event.preventDefault();
    if (password !== confirmarSenha) {
      alert("As senhas não são iguais. Por favor, tente novamente.");
      return;
    }

    const userData = {
      cpf,
      nomeCompleto,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Deu bom!");
  };

  return (
    <div className="corpo">
      
      <div className="user">
        <h1>Cadastro</h1>

      </div>
      {/* onSubmit={handleCadastro} */}
      <div className="campo">
        <form >
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            value={nomeCompleto}
            onChange={(event) => setNomeCompleto(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="confirmarSenha">Confirmar senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
            required
          />
        <br/>
          <label htmlFor="liOsTermos">
            <input
              type="checkbox"
              id="liOsTermos"
              checked={liOsTermos}
              onChange={() => setLiOsTermos(!liOsTermos)}
              required
            />
            Li os {/*<Link to="termos">termos</Link>*/} termos de compromisso
          </label>
        <br/>
        <Link to="/registro">
          {/* <button type="submit" onClick={handleCadastro} >Cadastrar</button> */}
          <Button onClick={handleCadastro} titulo="Cadastrar" />
        </Link>
          
        </form>
      </div>
    </div>
  );
}
