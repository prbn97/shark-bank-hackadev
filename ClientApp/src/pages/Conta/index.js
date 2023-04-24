import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'
import { ButtonSecundario } from '../../components/Botao/styles';
import userIcon from '../../assets/images/user-icon.svg';
import userNotification from '../../assets/images/notification-button.svg';
import arrow from '../../assets/images/arrow-right.svg';
import iconPix from '../../assets/images/icon-pix.svg';
import iconDepositar from '../../assets/images/icon-depositar.svg';
import iconTranferir from '../../assets/images/icon-transferir.svg';
import iconPagar from '../../assets/images/icon-pagar.svg';
import imagemCard1 from '../../assets/images/cardImg1.png';
import imagemCard2 from '../../assets/images/cardImg2.png';
import imagemCard3 from '../../assets/images/cardImg3.png';
import imagemCard4 from '../../assets/images/cardImg4.png';

const Conta = () => {
  const { sair } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.User>
        <img src={userIcon} alt='icone com a inicial do usuário'/>        
        <div className='UserName'>Olá, Lenny</div>
        <button className='user_Notification-estilo'>
          <img src={userNotification} alt='icone com a inicial do usuário'/>
        </button>
          
      </C.User>
      <C.ContainerBotoes>
        <ButtonSecundario text="Sair" onClick={() => [sair(), navigate('/acesso')]}>
          Sair
        </ButtonSecundario>
      </C.ContainerBotoes>

      <C.Saldo>
        <div className='SaldoLabel'>
          <label>
            Saldo
          </label>
          <div className='Saldo_link-extrato'>
          <Link to="/historico">Ver extrato</Link>
          <img src={arrow} alt=''/> 
          </div>
        </div>
        <div className='SaldoOutput-style'>
          <input>
          </input>
        </div>        
      </C.Saldo>

      <C.Servicos>
        <div className='services_buttons-estilo'>
          <button>
            <img src={iconPix} alt='icone pix'/>
          </button>
          <p>
            Pix
          </p>
        </div>

        <div className='services_buttons-estilo'>
          <button>
            <img src={iconTranferir} alt='icone Tranferir'/>
          </button>
          <p>
            Transferir
          </p>
        </div>
        <div className='services_buttons-estilo'>
          <button>
            <img src={iconDepositar} alt='icone Depositar'/>
          </button>
          <p>
            Depositar
          </p>
        </div>
        <div className='services_buttons-estilo'>
          <button>
            <img src={iconPagar} alt='icone código de barras'/>
          </button>
          <p>
            Pagar
          </p>
        </div>

      </C.Servicos>

      <C.Investimentos>
        <div className='card-estilo'>
          <img src={imagemCard1} alt='pessoa criando conta'/>
          <p><span>Pack de Protelçao</span><br/>
          Mais segurança para a sua e <br/> 
          conta e transações.
          </p>
          <button>
            Saiba Mais
          </button>
        </div>
        <div className='card-estilo'>
          <img src={imagemCard2} alt='pessoa criando conta'/>
          <p><span>Indique seu amigo</span><br/>
          Espalhe como é simples estar<br/> 
          no controle.
          </p>
          <button>
            Indicar amigos
          </button>
        </div>
        <div className='card-estilo'>
          <img src={imagemCard3} alt='mae cuidando de criança'/>
          <p><span>Seguro de vida</span><br/>
          Cuide de quem você ama de<br/> 
          de um jeito que cabe no seu...
          </p>
          <button>
            Conhecer
          </button>
        </div>
        <div className='card-estilo'>
          <img src={imagemCard4} alt='pessoa criando conta'/>
          <p><span>Portabilidade de salário</span><br/>
          Liberdade é escolher onde<br/> 
          receber seu dinheiro.
          </p>
          <button>
            Conhecer
          </button>
        </div>

      </C.Investimentos>
    </C.Container>
  );
};

export default Conta;