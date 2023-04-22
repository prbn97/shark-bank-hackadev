import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;

  
  @media screen and (max-width: 760px) {
    
  }

`;

export const Title = styled.h1`

`;

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background: purple;
`;