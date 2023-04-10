import { Container } from "./styles";
import svgIcon from "./pix.svg";

export function ButtonPix() {
    return (
        <Container type="button" style={{ backgroundImage: `url(${svgIcon})` }}>
        </Container>
    );
}