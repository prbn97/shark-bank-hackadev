import { Container } from "./styles";
import svgIcon from "./avancar.svg";

export function ButtonAvancar(props) {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}onClick={props.onClick}>
        </Container>
    );
}