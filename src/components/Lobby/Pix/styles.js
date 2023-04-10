import styled from "styled-components";

export const Container = styled.button`

    width: 56px;
    height: 56px;
    background: #101626;
    border-radius: 16px;
    background-repeat: no-repeat;
    background-position: center;

    &:active, &:hover {
        background: linear-gradient(180deg, #DFA634 0%, rgba(223, 166, 52, 0.25) 100%);
        box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
        background-repeat: no-repeat;
        background-position: center;
    }
    
`;