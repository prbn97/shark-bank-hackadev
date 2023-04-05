import styled from "styled-components";

export const Container = styled.button`

    background: #1B85C3;
    border: 3px solid #000000;
    box-sizing: border-box;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px;
    gap: 8px;

    &:active {
        background: rgba(27, 133, 195, 0.5);
        border: 3px solid rgba(0, 0, 0, 0.7);
        background-repeat: no-repeat;
        background-position: center;
    }

    &:disabled{
        background: #D9D9D9;
        border: 3px solid #EBEBEB;
    }
`;