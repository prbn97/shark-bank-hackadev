import styled from "styled-components";

export const Container = styled.button`
    align-items: center;
    background: linear-gradient(180deg, #DFA634 24.32%, #101626 120.61%);
    border-radius: 30px;
    border-style: none;
    color: #FFFFFF;
    gap: 8px;
    height: 48px;
    justify-content: center;
    padding: 8px;
    width: 168px;

    &:hover {
    background: linear-gradient(178.81deg, #DFA634 15.39%, #101626 83.45%);
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
    }

    &:active {
    background: linear-gradient(180deg, #C4882D -19.21%, #101626 40.39%);
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
    }

    &:disabled {
    background: linear-gradient(180deg, rgba(196, 136, 45, 0.6) -14.58%, rgba(16, 22, 38, 0.6) 58.28%);
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
    }
`;