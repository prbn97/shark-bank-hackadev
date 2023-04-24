import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
display: flex;
align-items: center;
gap: 8px;
.UserName{
font-weight: 700;
font-size: 18px;
color: white;
}
`;
export const Content= styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 30%
`;

export const ContainerContent= styled.div`
  align-items: flex-start;
  padding: 4px 16px;
  gap: 8px;
  margin-left: 10px;
  color: #E6E6E6
`;

export const Input = styled.input`
  /*background: linear-gradient(112.48deg, rgba(27, 133, 195, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);*/
 /* border-radius: 5px;*/
  /*border: 1px solid white;*/
  box-sizing: border-box;
 /* border: 1px solid #1B85C3;*/
  /*border-radius: 26px;*/
  outline: none;
  padding: 1rem 1.25rem;
  width: 100%;
  align-items: center;
  /*background-color: red;*/
  background: linear-gradient(112.48deg, rgba(255, 255, 255, 0.3) 6.31%, rgba(255, 255, 255, 0) 98.51%);
  border: 3px solid #FFFFFF;
  border-radius: 26px;
  
  ::placeholder {
    font-size: .85rem;
  };

`;

export const ContainerHistorico = styled.div`
 .Trasnferencia{

    margin-top: 3rem;

    gap: 2rem;
    width: 40vw;

    display: flex;
    align-items: center;
    justify-content: center;
 
    .TrasnferenciaTexto{
    display: flex;
    gap: 2.5rem;
    /*flex-direction: column;*/
    justify-content: center;
    color: #E6E6E6;
    }
    

    .TrasnferenciaMes{
    color: #E6E6E6;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13.3333px;
    line-height: 16px;
    display: flex;
    align-items: center;
    }
  }

`;
