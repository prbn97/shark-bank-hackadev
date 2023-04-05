import { Container } from "./styles";
import svgIcon from "./sair.svg";

export function ButtonSair() {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}>
        </Container>
    );
}