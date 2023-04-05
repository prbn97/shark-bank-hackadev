import styled from "styled-components";

export const Container = styled.input`
    background: linear-gradient(112.48deg, rgba(27, 133, 195, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
    border: 1px solid #1B85C3;
    border-radius: 26px;
    box-sizing: border-box;
    font-weight: 500;
    height: 40px;
    width: 295px;
    padding-left: 20px;

    &:focus, {
        align-self: stretch;
        filter: drop-shadow(4px 5px 10px rgba(0, 0, 0, 0.6));
        flex-grow: 0;
        order: 1;
    }

    &:active{
        align-self: stretch;
        filter: drop-shadow(4px 5px 10px rgba(0, 0, 0, 0.6));
        flex-grow: 0;
        order: 1;
    }


`;