import { Container } from "./styles";
import svgIcon from "./recuar.svg";

export function ButtonRecuar(props) {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}onClick={props.onClick}>
        </Container>
    );
}