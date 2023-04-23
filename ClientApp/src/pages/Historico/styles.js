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

export const Search = styled.div`
  background-color: red;

`;

export const ContainerHistorico = styled.div`
 .Trasnferencia{

    margin-top: 20px;

    gap: 30px;
    width: 50vw;

    display: flex;
    align-items: center;
    justify-content: center;
 }
    .TrasnferenciaTexto{
    display: flex;
    gap: 2rem;
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
  

`;
