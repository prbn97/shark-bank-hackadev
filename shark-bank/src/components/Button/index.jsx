import styled from "styled-components";
import { Container } from "./styles";

export function Button({ titulo, corTitulo, corFundo,onClick }) {
    return (
        <Container
            type="button"
            onClick={onClick}
            style={{ background: corFundo, color: corTitulo }}
            
        >
            {titulo}
        </Container >


    );
}