import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
`;

export const ButtonPrimario = styled.button`

  background: linear-gradient(180deg, #DFA634 24.32%, #101626 120.61%);
  border-radius: 30px;
  padding: 8px;
  gap: 8px;

  width: 184px;
  height: 48px;
  left: 21px;
  top: 16px;
  border: none;

  background: linear-gradient(180deg, #DFA634 24.32%, #101626 120.61%);
  border-radius: 30px;

  :hover {
  background: linear-gradient(178.81deg, #DFA634 15.39%, #101626 83.45%);
  /* Button Blur */
  box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const ButtonSecundario = styled.button`
  padding: 8px;
  gap: 8px;
  border: none;

  width: 184px;
  height: 48px;

  background: linear-gradient(180deg, #EBEBEB 24.32%, #101626 120.61%);
  border-radius: 30px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  :hover {
    background: linear-gradient(178.81deg, #EBEBEB 15.39%, #101626 83.45%);
    /* Button Blur */
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.6);
  }
`;


