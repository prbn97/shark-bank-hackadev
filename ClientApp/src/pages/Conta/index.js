import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'
import { ButtonSecundario } from '../../components/Botao/styles';
import { Button } from '../../components/Botao/styles';

const Conta = () => {
  const { sair } = useAuth();
  const navigate = useNavigate();

  return (

    <C.Container>
      <C.Title>Conta</C.Title>
      <C.ContainerBotoes>
        <ButtonSecundario text="Sair" onClick={() => [sair(), navigate('/acesso')]}>
          Sair
        </ButtonSecundario>
        <Button text="Pix" onClick={() => [alert("Acessou tela pix")]}>
          Pix
        </Button>
      </C.ContainerBotoes>
    </C.Container>
  );
};

export default Conta;