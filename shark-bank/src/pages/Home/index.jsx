import { Container } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export function Home() {
  return (
    <Container>
      <h1>Estilo botão componente</h1>
      <Button />
      <div style={{ backgroundColor: '#D9D9D9' }}>
        <h1>Estilo input componente</h1>
        <Input />
      </div>
    </Container>
  );
}