import { useState } from "react";

export function EsqueciSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("esqueciSenhaEmail", email);
    alert("blzzz funcionando");
  };

  return (
    <div className="AchoQueCorpo">
      <h1>Esqueci a senha</h1>
      <div className="AchoQueCampo">
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
        <button type="submit">Enviar</button>
      </form>
      {/* enquanto n tem rotas usei isso, mas acho que entra em 
      looping com a página do emailEnviado */}
      <button onClick={() => window.history.back()}>Voltar</button>
      </div>
    </div>
  );
}
