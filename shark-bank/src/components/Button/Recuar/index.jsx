import { Container } from "./styles";
import svgIcon from "./recuar.svg";

export function ButtonRecuar() {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}>
        </Container>
    );
}