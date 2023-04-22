import React from 'react'
import * as C from './styles'
import * as S from '../../components/Botao/styles';

const Home = () => {
  return (
    <C.Container>
      <div className='container_content'>
        <C.Title>Shark Bank</C.Title>
        <C.ImagemOnda>
        </C.ImagemOnda>
        <C.Texto>Venha mergulhar nesse
          oceano de vantagens!
        </C.Texto>
      </div>
      <div className='container_painel'>
        <div className='container_painel_content'>
          <C.ContainerPainelContentTitle>
            Crie sua conta!
          </C.ContainerPainelContentTitle>
          <C.ContainerPainelContentText>
            Você precisa apenas de um email e um numero de telefone para começar!
          </C.ContainerPainelContentText>
        </div>
        <div className='container_painel_buttons'>
          <S.ButtonPrimario text="Acessar" onClick={() => [alert("Fazer lógica para tela de acesso")]}>Acessar</S.ButtonPrimario>
          <S.ButtonSecundario text="Cadastrar" onClick={() => [alert("Fazer lógica para tela de cadastro")]}>Cadastrar</S.ButtonSecundario>
        </div>
      </div>
    </C.Container>
  );
};

export default Home;