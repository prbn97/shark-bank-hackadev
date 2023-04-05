import { Container } from './styles';
import { Button } from '../../components/Button/Primario';
import { Input } from '../../components/Input';
import { ButtonAvancar } from '../../components/Button/Avancar';
import { ButtonCadastrar } from '../../components/Button/Secundario';
import { ButtonVoltar } from '../../components/Button/Voltar';
import { ButtonRecuar } from '../../components/Button/Recuar';
import { ButtonSair } from '../../components/Button/Sair';
import { ButtonPix } from '../../components/Lobby/Pix';


export function Home() {
  return (
    <Container>
      <h1>Estilo botão componente</h1>
      <Button />

      <div style={{ backgroundColor: '#D9D9D9' }}>
        <h1>Estilo input componente</h1>
        <Input />
      </div>

      <ButtonAvancar />
      <ButtonCadastrar />
      <ButtonVoltar />
      <ButtonRecuar />
      <ButtonSair />
      <ButtonPix />

    </Container>
  );
}