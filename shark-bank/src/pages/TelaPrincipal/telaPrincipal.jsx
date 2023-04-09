
import happyshark from "../../../assets/happyshark.png"
import { Link } from 'react-router-dom';

export function TelaPrincipal(){


    return(
        <div>
            <div>
            
            </div>
            
            <div>
                
                <img src={happyshark} alt="logo de um tubarao sorridente" />
                <div>
                    <h1>frase para login ou cadastro</h1>
                    
                </div>
            </div>

            <Link to="/cadastro">
                 {/* botão para cadastro */}
            </Link>
            <Link to="/login">
                 {/* botão para login */}
            </Link>

        </div>
        
        
        
        
    );

}