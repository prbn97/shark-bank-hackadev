import { Container } from "./styles";
import svgIcon from "./transferir.svg";

export function ButtonTrans() {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}>
        </Container>
    );
}