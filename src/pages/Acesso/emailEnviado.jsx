import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";
import Bateria from '../../assets/bateria.png'

export function EmailEnviado() {

  return (
    <div className="corpo">
      <img src={Bateria} alt="imagem da bateria do celular" />

      <div className="textoAcesso">
        <h1>Email enviado</h1>
      </div>
      
      <div className="campoAcesso">
      
      <p className='textoPequenoAcesso'>
      Foi enviado um e-mail para sua caixa de entrada, siga as instruções para a 
      recuperação da sua senha.
      </p>

      <div className="buttonsAcesso" >
        <Link to="/login">
            <Button titulo = "Voltar"/>
        </Link>
      </div>
      
      </div>
      
    </div>
  );
}
