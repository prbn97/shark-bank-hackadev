import React from 'react'
import * as C from './styles'

const Botao = ({ text, onClick, type = "button" }) => {
    return (
        <C.Button type={type} onClick={onClick}>
            {text}
        </C.Button>
    );
};

export default Botao;
