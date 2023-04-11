import { Container } from './styles';
import { Button } from '../../components/Button';
import { ButtonCadastrar } from '../../components/Button/Secundario';
import Bateria from '../../assets/bateria.png';
import mobile from '../../assets/mobile.png';
import Onda from '../../assets/efeito de onda.png';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container className='conteudo'>

      <img src={Bateria} alt="imagem do das informações de bateria e sinal do celular" />

      <main className='conteudo__home'>
        <h1>Shark Bank</h1>

        <img src={Onda} alt="efeito de onda" />

        <p>Venha mergulhar nesse oceano de vantagens!</p>

        <img src={mobile} alt="imagem logo" />

        <h2>Crie sua conta!</h2>

        <h4>Você precisa apenas de um email e um número de telefone para começar!</h4>

        <Link to="/login">
          <Button titulo="Acessar" />
        </Link>

        <Link to="/cadastro">
          <ButtonCadastrar
            titulo="Cadastrar"
            corTitulo='#101626'
            corFundo='linear-gradient(180deg, #EBEBEB 24.32%, #101626 120.61%)'
          />
        </Link>
      </main>
    </Container>
  );
}
