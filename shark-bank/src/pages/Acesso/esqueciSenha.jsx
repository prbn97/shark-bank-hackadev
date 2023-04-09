import { useState } from "react";
import { Link } from 'react-router-dom';

export function EsqueciSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("esqueciSenhaEmail", email);
    alert("blzzz funcionando");
  };

  return (
    <div className="corpo">

      <div className="user">
        <h1>Esqueci a senha</h1>
      </div>
      
      <div className="campo">
      <form onSubmit={handleSubmit}>
      <p>
        Para redefinir a sua senha, informe o e-mail cadastrado na sua conta e
        lhe enviaremos um link com as instruções.
      </p>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        
      </form>
      <Link to="/emailenviado">
        <button type="submit">Enviar</button>
      </Link>
      

      <Link to="/login">
        <button>Voltar</button>
      </Link>
      
      </div>
    </div>
  );
}
