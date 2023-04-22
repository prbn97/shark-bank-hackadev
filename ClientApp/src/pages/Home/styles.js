import styled from "styled-components";
import imagemOnda from "../../assets/images/onda.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
`;

export const ImagemOnda = styled.div`
  height: 10%;
  width: 30%;
  background: url(${imagemOnda}) no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Texto = styled.p`
`;

export const ContainerPainel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #D9D9D9;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
`;

export const ContainerPainelContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerPainelContentTitle = styled.h2`
`;

export const ContainerPainelContentText = styled.p`
`;

export const ContainerPainelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;