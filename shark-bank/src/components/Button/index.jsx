import styled from "styled-components";
import { Container } from "./styles";

export function Button({ titulo, corTitulo, corFundo }) {
    return (
        <Container
            type="button"
            style={{ background: corFundo, color: corTitulo }}
            onClick={() => {
                console.log("Clicou no botão");
            }}
        >
            {titulo}
        </Container >


    );
}