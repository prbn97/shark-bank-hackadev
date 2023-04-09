import { ButtonSair } from "../../../components/Button/Sair";
import { ButtonAvancar } from "../../../components/Button/Avancar";
import happyshark from "../../../assets/happyshark.png"
import { Link } from 'react-router-dom';
import Bateria from '../../../assets/bateria.png'

export function TransferenciaRealizada(){


    return(
        <div className="corpo">

            <img src={Bateria} alt="imagem da bateria do celular" />

            
            <div className='campo'>
                <fieldset id="fields-set">

                    <div>
                        <ButtonSair/>
                    </div>
                    <div className="transferenciaRealizadaContainer">

                        <img className="imagemTubaraoSorridente" src={happyshark} alt="logo de um tubarao sorridente" />
                        <div className="transferenciaRealizadaBox">
                            <h1>Transferência realizada!</h1>
                            <p>Para mais detalhes veja o histórico de transação da sua conta</p>
                        </div>

                    </div>
                </fieldset>

                <div className='botaoAvancar'>
                    <Link to="/principal">
                        <ButtonAvancar/>
                    </Link>
                </div>
            </div>

            

        </div>
        
        
        
        
    );

}