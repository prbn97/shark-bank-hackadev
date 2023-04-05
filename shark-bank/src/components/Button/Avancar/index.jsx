import { Container } from "./styles";
import svgIcon from "./avancar.svg";

export function ButtonAvancar() {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}>
        </Container>
    );
}