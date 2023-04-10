import { useState } from "react";
import { Link } from 'react-router-dom';
import Bateria from '../../assets/bateria.png'
import { Button } from "../../components/Button";


export function EsqueciSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("esqueciSenhaEmail", email);
    alert("blzzz funcionando");
  };

  return (
    <div className="corpo">

      <img src={Bateria} alt="imagem da bateria do celular" />

      <div className="textoAcesso">
        <h2>Esqueci a senha</h2>
      </div>
      
      <div className="campoAcesso">

        <div>
          
          <p className="textoPequenoAcesso">
            Para redefinir a sua senha, informe o e-mail cadastrado na sua conta e
            lhe enviaremos um link com as instruções.
          </p>

        </div>


        <div className="imputAcesso">
          
          <label className="inputNome" htmlFor="email">E-mail:</label>
          <input className="input"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

        </div>

        <div className="buttonsAcesso">


          <Link to="/emailenviado">
            <Button titulo= 'Enviar' />
            
          </Link>

          
          

          <Link to="/login">
            <Button 
            titulo= 'Voltar'             
            corTitulo='#101626'
            corFundo='linear-gradient(180deg, #EBEBEB 24.32%, #101626 120.61%)'/>
            
          </Link>

        </div>


        <form onSubmit={handleSubmit}>
          
          
        </form>
      
      </div>
    </div>
  );
}
