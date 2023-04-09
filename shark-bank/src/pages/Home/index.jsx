import { Container } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonAvancar } from '../../components/Button/Avancar';
import { ButtonCadastrar } from '../../components/Button/Secundario';
import { ButtonRecuar } from '../../components/Button/Recuar';
import { ButtonSair } from '../../components/Button/Sair';
import { ButtonPix } from '../../components/Lobby/Pix';
import Bateria from '../../assets/bateria.png'
import { Link } from 'react-router-dom';
// import { ButtonDummy } from '../../components/Button/DummyButton';

export function Home() {
  return (
    <Container>
      <h1>Estilo botão componente</h1>
      <Button titulo="Cadastrar" />
      <Button titulo="Enviar" />
      <Button titulo="Acessar" />

      <Button
        titulo="Cadastrar"
        corTitulo='#101626'
        corFundo='linear-gradient(180deg, #EBEBEB 24.32%, #101626 120.61%)'
         />

      <div style={{ backgroundColor: '#D9D9D9' }}>
        <h1>Estilo input componente</h1>
        <Input />
      </div>

      <ButtonAvancar />
      <ButtonCadastrar /> 
      
      {/* <Link to='/dummy'>
        <ButtonDummy />
      </Link> */}
      
      <ButtonRecuar />
      <ButtonSair />
      <ButtonPix />

      
      // MEU MIC NÃO ESTÁ ATIVADO

      <img src={Bateria} alt="imagem do das informações de bateria e sinal do celular" />

    </Container>
  );
}