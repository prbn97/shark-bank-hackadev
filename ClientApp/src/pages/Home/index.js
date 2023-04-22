import React from 'react'
import * as C from './styles'
import * as S from '../../components/Botao/styles';

const Home = () => {
  return (
    <C.Container>
      <C.ContainerContent>
        <C.Title>Shark Bank</C.Title>
        <C.ImagemOnda>
          <C.Texto>Venha mergulhar nesse
            oceano de vantagens!
          </C.Texto>
        </C.ImagemOnda>
      </C.ContainerContent>
      <C.ContainerPainel>
        <C.ContainerPainelContent>
          <C.ContainerPainelContentTitle>
            Crie sua conta!
          </C.ContainerPainelContentTitle>
          <C.ContainerPainelContentText>
            Você precisa apenas de um email e um numero de telefone para começar!
          </C.ContainerPainelContentText>
        </C.ContainerPainelContent>
        <C.ContainerPainelButton>
          <S.ButtonPrimario text="Acessar" onClick={() => [alert("Fazer lógica para tela de acesso")]}>Acessar</S.ButtonPrimario>
          <S.ButtonSecundario text="Cadastrar" onClick={() => [alert("Fazer lógica para tela de cadastro")]}>Cadastrar</S.ButtonSecundario>
        </C.ContainerPainelButton>
      </C.ContainerPainel>
    </C.Container>
  );
};

export default Home;