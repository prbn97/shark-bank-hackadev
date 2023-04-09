import { ButtonSair } from "../../../components/Button/Sair";
import { ButtonAvancar } from "../../../components/Button/Avancar";
import happyshark from "../../../assets/happyshark.png"
import { Link } from 'react-router-dom';

export function TransferenciaRealizada(){


    return(
        <div>
            <div>
            <ButtonSair/>
            </div>
            
            <div>
                
                <img src={happyshark} alt="logo de um tubarao sorridente" />
                <div>
                    <h1>Transferência realizada!</h1>
                    <p>Para mais detalhes veja o histórico de transação da sua conta</p>
                </div>
            </div>

            <Link to="/principal">
                 <ButtonAvancar/>
            </Link>
            

        </div>
        
        
        
        
    );

}