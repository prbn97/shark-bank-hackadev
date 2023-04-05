import styled from "styled-components";

export const Container = styled.button`

    background: #EBEBEB;
    border: 3px solid rgba(217, 217, 217, 0.5);
    box-sizing: border-box;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px;
    gap: 8px;


    &:active {
        background: #D9D9D9;
        border: 3px solid #EBEBEB;

        background-repeat: no-repeat;
        background-position: center;
    }

    &:disabled{
        background: #D9D9D9;
        border: 3px solid #EBEBEB;

    }
`;