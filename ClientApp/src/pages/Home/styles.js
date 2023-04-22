import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: 10rem;  
  
  .container_content {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
  }

  .container_painel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    width: 25%;
    background: #D9D9D9;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
    border-radius: 1.625rem;
  }

  .container_painel_content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .container_painel_buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  color: #DFA634;
  font-size: 3rem;
`;

export const ImagemOnda = styled.img`
  height: 10%;
  width: 45%;
  background-size: contain;
  background-position: center;
`;

export const Texto = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  text-align: center;
  color: #D9D9D9;
`;

export const ContainerPainelContentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
`;

export const ContainerPainelContentText = styled.p`
  text-align: center;
  `;

