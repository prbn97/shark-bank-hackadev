import styled from "styled-components";
import imagemOnda from "../../assets/images/onda.svg";

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 9em;
  height: 100vh;
  justify-content: center;
  margin: 0;

  .container_content {
    background-color: green;
  }

  .container_painel {
    background-color: green;
    background: #D9D9D9;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
  }

  .container_painel_content {
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap: 20px; */
  }

  .container_painel_buttons {
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.h1`
`;

export const ImagemOnda = styled.img`
  height: 10%;
  width: 30%;
  src: url(${imagemOnda});
  background-size: contain;
  background-position: center;
`;

export const Texto = styled.p`
`;

export const ContainerPainelContentTitle = styled.h2`
  `;

export const ContainerPainelContentText = styled.p`
  `;

