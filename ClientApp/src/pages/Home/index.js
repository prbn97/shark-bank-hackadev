import React from 'react'
import * as C from './styles'
import * as S from '../../components/Botao/styles';
import imagemOnda from "../../assets/images/onda.svg";

const Home = () => {
  return (
    <C.Container>
      <div className='container_content'>
        <C.Title>Shark Bank</C.Title>
        <C.ImagemOnda src={imagemOnda} />
        <C.Texto>
          Venha mergulhar nesse <br />
          oceano de vantagens!
        </C.Texto>
      </div>
      <div className='container_painel'>
        <div className='container_painel_content'>
          <C.ContainerPainelContentTitle>
            Crie sua conta!
          </C.ContainerPainelContentTitle>
          <C.ContainerPainelContentText>
            Você precisa apenas de um <br />
            email e um numero de telefone <br />
            para começar!
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