import { Container } from './styles';
import { Button } from '../../components/Button';
import { ButtonCadastrar } from '../../components/Button/Secundario';
import Bateria from '../../assets/bateria.png';
import mobile from '../../assets/mobile.png';
import Onda from '../../assets/efeito de onda.png';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <img src={Bateria} alt="imagem do das informações de bateria e sinal do celular" />

      <div className='conteudo__home'>

        <div className='conteudo__home__titulo'>
          <h1>Shark Bank</h1>
          <img src={Onda} width={167} height={16} alt="efeito de onda" />
          <h2 className='conteudo__home__titulo__h2'>Venha mergulhar nesse oceano de vantagens!</h2>
        </div>

        <div className="conteudo__home__apresentacao">
          <img src={mobile} width={80} height={80} alt="imagem logo" />
          <h2>Crie sua conta!</h2>
          <p>Você precisa apenas de um email e um número de telefone para começar!</p>
        </div>

        <div className="conteudo__home__botoes">
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
        </div>


      </div>
    </Container >
  );
}
