import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'
import { ButtonSecundario } from '../../components/Botao/styles';
import userIcon from '../../assets/images/user-icon.svg';
import userNotification from '../../assets/images/notification-button.svg';
import arrow from '../../assets/images/arrow-right.svg';

const Conta = () => {
  const { sair } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>

      <C.User>
        <img src={userIcon} alt='icone com a inicial do usuário'/>        
        <div className='UserName'>Olá, Lenny</div>
        <img src={userNotification} alt='icone com a inicial do usuário'/>  
      </C.User>

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


      <C.ContainerBotoes>
        
        <ButtonSecundario text="Sair" onClick={() => [sair(), navigate('/acesso')]}>
          Sair
        </ButtonSecundario>
      </C.ContainerBotoes>

    </C.Container>
  );
};

export default Conta;